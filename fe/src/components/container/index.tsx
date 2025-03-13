export const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
        {children}
    </div>
}