"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, SkipBack, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoPlayerProps {
  src: string
  title: string
  poster?: string
  isLocked?: boolean
}

export function VideoPlayer({ src, title, poster, isLocked = false }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [showControls, setShowControls] = useState(true)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (!isFullscreen) {
        containerRef.current.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
    }
  }

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number.parseFloat(e.target.value)
    setCurrentTime(newTime)
    if (videoRef.current) {
      videoRef.current.currentTime = newTime
    }
  }

  const formatTime = (time: number) => {
    if (!time) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const handleMouseMove = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
  }, [])

  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    switch (e.key.toLowerCase()) {
      case " ":
        e.preventDefault()
        togglePlayPause()
        break
      case "f":
        handleFullscreen()
        break
      case "m":
        setIsMuted(!isMuted)
        break
      case "arrowright":
        if (videoRef.current) {
          videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 5, duration)
        }
        break
      case "arrowleft":
        if (videoRef.current) {
          videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 5, 0)
        }
        break
      default:
        break
    }
  }

  if (isLocked) {
    return (
      <div className="w-full bg-black rounded-lg overflow-hidden aspect-video flex items-center justify-center">
        <div className="text-center">
          <Play className="w-16 h-16 text-white mx-auto mb-4 opacity-50" />
          <p className="text-white text-lg">Debes comprar este contenido para verlo</p>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="w-full bg-black rounded-lg overflow-hidden aspect-video group relative"
      onMouseMove={handleMouseMove}
      onContextMenu={handleContextMenu}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover select-none pointer-events-none"
        onPlay={handlePlay}
        onPause={handlePause}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        crossOrigin="anonymous"
        controlsList="nodownload"
      />

      {/* Controls Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Title */}
        <div className="absolute top-4 left-4 right-4">
          <h3 className="text-white font-semibold text-sm line-clamp-1">{title}</h3>
        </div>

        {/* Center Play Button */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlayPause}
              className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <Play className="w-8 h-8 text-white fill-white" />
            </button>
          </div>
        )}

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          {/* Progress Bar */}
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-white/30 rounded-lg cursor-pointer accent-accent hover:h-2 transition-all"
            style={{
              background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${
                (currentTime / duration) * 100
              }%, rgba(255,255,255,0.3) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.3) 100%)`,
            }}
          />

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Play/Pause */}
              <Button
                size="icon"
                variant="ghost"
                onClick={togglePlayPause}
                className="text-white hover:bg-white/20 h-9 w-9"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
              </Button>

              {/* Skip Back */}
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 5, 0)
                  }
                }}
                className="text-white hover:bg-white/20 h-9 w-9"
              >
                <SkipBack className="w-5 h-5" />
              </Button>

              {/* Skip Forward */}
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 5, duration)
                  }
                }}
                className="text-white hover:bg-white/20 h-9 w-9"
              >
                <SkipForward className="w-5 h-5" />
              </Button>

              {/* Volume Control */}
              <div className="flex items-center gap-2 ml-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:bg-white/20 h-9 w-9"
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    handleVolumeChange(Number.parseFloat(e.target.value))
                    setIsMuted(false)
                  }}
                  className="w-20 h-1 bg-white/30 rounded-lg cursor-pointer accent-accent"
                />
              </div>

              {/* Time Display */}
              <span className="text-white text-xs font-semibold ml-4">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Settings (placeholder) */}
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 h-9 w-9">
                <Settings className="w-5 h-5" />
              </Button>

              {/* Fullscreen */}
              <Button
                size="icon"
                variant="ghost"
                onClick={handleFullscreen}
                className="text-white hover:bg-white/20 h-9 w-9"
              >
                <Maximize className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute top-2 right-2 opacity-20 pointer-events-none">
        <span className="text-white text-xs font-semibold bg-black/30 px-2 py-1 rounded">EduPlatform</span>
      </div>
    </div>
  )
}
