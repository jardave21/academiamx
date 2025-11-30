module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Documentos/GitHub/academiamx/auth.config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authConfig",
    ()=>authConfig
]);
const authConfig = {
    pages: {
        signIn: "/auth/login"
    },
    callbacks: {
        authorized ({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false // Redirect unauthenticated users to login page
                ;
            } else if (isLoggedIn) {
                // Redirect logged-in users away from auth pages
                if (nextUrl.pathname.startsWith("/auth")) {
                    return Response.redirect(new URL("/dashboard", nextUrl));
                }
            }
            return true;
        }
    },
    providers: []
};
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/Documentos/GitHub/academiamx/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$auth$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/auth.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/next-auth/providers/credentials.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/@auth/core/providers/credentials.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
async function getUser(email) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        return user;
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw new Error("Failed to fetch user.");
    }
}
const { auth, signIn, signOut, handlers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$auth$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authConfig"],
    callbacks: {
        async jwt ({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session ({ session, token }) {
            if (token && session.user) {
                session.user.role = token.role;
            }
            return session;
        }
    },
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            async authorize (credentials) {
                const parsedCredentials = __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    email: __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email(),
                    password: __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(6)
                }).safeParse(credentials);
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;
                    // Since password is optional in schema (for OAuth potentially), check if it exists
                    if (!user.password) return null;
                    const passwordsMatch = await __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
                    if (passwordsMatch) return user;
                }
                console.log("Invalid credentials");
                return null;
            }
        })
    ]
});
}),
"[project]/Documentos/GitHub/academiamx/app/auth/login/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60484701ccfb5239a99afb97062c52c13b5ddbf431":"authenticate"},"",""] */ __turbopack_context__.s([
    "authenticate",
    ()=>authenticate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/@auth/core/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function authenticate(prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signIn"])("credentials", formData);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AuthError"]) {
            switch(error.type){
                case "CredentialsSignin":
                    return "Credenciales inválidas.";
                default:
                    return "Algo salió mal.";
            }
        }
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    authenticate
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(authenticate, "60484701ccfb5239a99afb97062c52c13b5ddbf431", null);
}),
"[project]/Documentos/GitHub/academiamx/.next-internal/server/app/auth/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/Documentos/GitHub/academiamx/app/auth/login/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$app$2f$auth$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/app/auth/login/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/Documentos/GitHub/academiamx/.next-internal/server/app/auth/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/Documentos/GitHub/academiamx/app/auth/login/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "60484701ccfb5239a99afb97062c52c13b5ddbf431",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$app$2f$auth$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authenticate"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f2e$next$2d$internal$2f$server$2f$app$2f$auth$2f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$app$2f$auth$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Documentos/GitHub/academiamx/.next-internal/server/app/auth/login/page/actions.js { ACTIONS_MODULE0 => "[project]/Documentos/GitHub/academiamx/app/auth/login/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$app$2f$auth$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/app/auth/login/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e69ad777._.js.map