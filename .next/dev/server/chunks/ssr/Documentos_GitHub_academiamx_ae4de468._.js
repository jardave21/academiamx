module.exports = [
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
"[project]/Documentos/GitHub/academiamx/.next-internal/server/app/auth/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/Documentos/GitHub/academiamx/components/auth/logout-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Documentos/GitHub/academiamx/app/auth/login/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$components$2f$auth$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/components/auth/logout-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$app$2f$auth$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/app/auth/login/actions.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/Documentos/GitHub/academiamx/.next-internal/server/app/auth/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/Documentos/GitHub/academiamx/components/auth/logout-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Documentos/GitHub/academiamx/app/auth/login/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "007d61cc7bd6e272accc74a9e7759a48bd4a07d567",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$components$2f$auth$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleSignOut"],
    "60484701ccfb5239a99afb97062c52c13b5ddbf431",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$app$2f$auth$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authenticate"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f2e$next$2d$internal$2f$server$2f$app$2f$auth$2f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$components$2f$auth$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$app$2f$auth$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Documentos/GitHub/academiamx/.next-internal/server/app/auth/login/page/actions.js { ACTIONS_MODULE0 => "[project]/Documentos/GitHub/academiamx/components/auth/logout-action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Documentos/GitHub/academiamx/app/auth/login/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$components$2f$auth$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/components/auth/logout-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$app$2f$auth$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/app/auth/login/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Documentos_GitHub_academiamx_ae4de468._.js.map