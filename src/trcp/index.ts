import { publicProcedure, router } from "./trcp";

export const appRouter = router({
    anyRoute: publicProcedure.query(() => {
        return 'Hello'
    })
})

export type AppRouter = typeof appRouter 