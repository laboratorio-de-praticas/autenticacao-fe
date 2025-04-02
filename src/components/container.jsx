const Container = ({ children }) => {
    return (
        <div className={`flex max-w-screen min-h-screen flex-col`}>
            {children}
        </div>
    );
};

export default Container;