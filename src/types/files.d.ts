declare module '*.less' {
    interface lessInterface {
        [propName: string]: any
    }

    const content: lessInterface
    export default content
}

declare module '*.jpg' {
    const content: any
    export default content
}

declare module '*.md' {
    const content: any
    export default content
}
