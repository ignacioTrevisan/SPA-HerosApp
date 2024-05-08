import { AuthProvider } from "./auth/context/authProvider"
import { AppRouter } from "./router/appRouter"

export const HeroesApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
