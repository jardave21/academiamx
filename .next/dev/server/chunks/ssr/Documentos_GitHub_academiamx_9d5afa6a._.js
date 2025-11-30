module.exports = [
"[project]/Documentos/GitHub/academiamx/app/auth/signup/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60fea5f5273463abdef6f1dec542871e815b5586e0":"registerUser"},"",""] */ __turbopack_context__.s([
    "registerUser",
    ()=>registerUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const SignupSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Correo electrónico inválido"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5, "La contraseña debe tener al menos 5 caracteres"),
    confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "user",
        "professor"
    ]).default("user")
}).refine((data)=>data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: [
        "confirmPassword"
    ]
});
async function registerUser(prevState, formData) {
    const validatedFields = SignupSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
        role: formData.get("role")
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Error en los datos del formulario"
        };
    }
    const { name, email, password, role } = validatedFields.data;
    try {
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                email
            }
        });
        if (existingUser) {
            return {
                message: "El correo electrónico ya está registrado"
            };
        }
        const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: role
            }
        });
    } catch (error) {
        console.error("Registration error:", error);
        return {
            message: "Error al crear la cuenta. Por favor intenta de nuevo."
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/auth/login");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    registerUser
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(registerUser, "60fea5f5273463abdef6f1dec542871e815b5586e0", null);
}),
"[project]/Documentos/GitHub/academiamx/.next-internal/server/app/auth/signup/page/actions.js { ACTIONS_MODULE0 => \"[project]/Documentos/GitHub/academiamx/components/auth/logout-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Documentos/GitHub/academiamx/app/auth/signup/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$components$2f$auth$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/components/auth/logout-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$app$2f$auth$2f$signup$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/app/auth/signup/actions.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/Documentos/GitHub/academiamx/.next-internal/server/app/auth/signup/page/actions.js { ACTIONS_MODULE0 => \"[project]/Documentos/GitHub/academiamx/components/auth/logout-action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Documentos/GitHub/academiamx/app/auth/signup/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "007d61cc7bd6e272accc74a9e7759a48bd4a07d567",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$components$2f$auth$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleSignOut"],
    "60fea5f5273463abdef6f1dec542871e815b5586e0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$app$2f$auth$2f$signup$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerUser"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f2e$next$2d$internal$2f$server$2f$app$2f$auth$2f$signup$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$components$2f$auth$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$app$2f$auth$2f$signup$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Documentos/GitHub/academiamx/.next-internal/server/app/auth/signup/page/actions.js { ACTIONS_MODULE0 => "[project]/Documentos/GitHub/academiamx/components/auth/logout-action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Documentos/GitHub/academiamx/app/auth/signup/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$components$2f$auth$2f$logout$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/components/auth/logout-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documentos$2f$GitHub$2f$academiamx$2f$app$2f$auth$2f$signup$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documentos/GitHub/academiamx/app/auth/signup/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Documentos_GitHub_academiamx_9d5afa6a._.js.map