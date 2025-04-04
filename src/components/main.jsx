const Main = ({
    children,
    hasSpacing = false
}) => {
    let spacing = ""

    if (hasSpacing) {
        spacing = "pb-12 pt-10"
    }

    return (
        <main className={`flex w-full justify-center ${spacing}`}>
            {children}
        </main>
    )
}

export default Main;