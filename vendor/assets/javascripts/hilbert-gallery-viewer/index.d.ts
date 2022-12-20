interface Action<O, R> {
    execute(arg: O): Promise<R>;
    unpack(arg: unknown): O;
    buildExecutor(arg: unknown): () => Promise<R>;
}
enum LogLevel {
    OFF = 0,
    ERROR = 200,
    WARN = 300,
    INFO = 400,
    DEBUG = 500,
    TRACE = 600
}
interface Animation {
    cancel(): void;
    isCancelled(): boolean;
    done(): Promise<void>;
    isDone(): boolean;
}
interface AnimationOptions {
    duration?: number;
    delay?: number;
}
interface AnimationStatic<A extends Animation, O extends AnimationOptions> {
    new (element: HTMLDivElement, options: O): A;
    unpack(options: unknown): O;
    prepare(options: unknown): (element: HTMLElement) => A;
    getStyleSheetAsString(): string;
}
interface Transition extends Animation {
    readonly targetShowUpDelay: number;
    out(): Promise<void>;
    isOut(): boolean;
}
type TransitionOptions = AnimationOptions;
interface TransitionStatic<T extends Transition, O extends TransitionOptions> {
    new (element: HTMLElement, options: O): T;
    unpack(options: unknown): O;
    prepare(options: unknown): (element: HTMLElement) => T;
    getStyleSheetAsString(): string;
}
declare class TransitionFactory {
    protected root: DocumentFragment;
    protected transitionRegistry: Map<string, TransitionStatic<Transition, TransitionOptions>>;
    constructor(root: DocumentFragment);
    protected registerKnownTransitions(): void;
    register(id: string, transitionClass: TransitionStatic<Transition, TransitionOptions>): void;
    prepare(type?: string, options?: Record<string, unknown>): (element: HTMLDivElement) => Transition;
}
declare class AnimationFactory {
    protected root: DocumentFragment;
    protected animationRegistry: Map<string, AnimationStatic<Animation, AnimationOptions>>;
    constructor(root: DocumentFragment);
    protected registerKnownTransitions(): void;
    register(id: string, AnimationClass: AnimationStatic<Animation, AnimationOptions>): void;
    prepare(type?: string, options?: unknown): (element: HTMLDivElement) => Animation;
}
declare class Preloader {
    protected container: HTMLElement;
    protected readonly refs: Map<string, SupportedContentElement>;
    constructor(container?: HTMLElement);
    static key(mimetype: string, url: string): string;
    protected preloadImpl(mimetype: string, url: string): {
        key: string;
        element: SupportedContentElement;
    };
    preload(...items: PreloadItem[]): Promise<void>[];
    get(mimetype: string, url: string): SupportedContentElement;
    static readyForDisplay<T extends SupportedContentElement>(content: T): Promise<T>;
    protected static readyForDisplayImage<T extends HTMLImageElement>(image: T): Promise<T>;
    protected static readyForDisplayVideo<T extends HTMLVideoElement>(video: T): Promise<T>;
    protected static createPreloadingElement(mimetype: string, url: string): HTMLImageElement | HTMLVideoElement;
    protected static createPreloadingImage(url: string): HTMLImageElement;
    protected static createPreloadingVideo(url: string): HTMLVideoElement;
    protected unrefImpl(...keys: string[]): void;
    unref(...refs: PreloadItem[]): void;
    clear(): void;
}
type SupportedContentElement = HTMLImageElement | HTMLVideoElement;
type DOMStructure = {
    slideOuterWrapperElement: HTMLDivElement;
    slideInnerWrapperElement: HTMLDivElement;
    slideElement: HTMLDivElement;
    contentElement: SupportedContentElement;
};
type SlideData = DOMStructure & {
    transition: Transition;
    animation: Animation;
    contentPlayTimeoutId: ReturnType<typeof setTimeout>;
};
type PreloadItem = {
    mimetype: string;
    url: string;
};
type State = {
    viewer: HilbertGalleryViewer;
    log: Log;
    preloader: Preloader;
    shadowRoot: ShadowRoot;
    container: HTMLDivElement;
    activeSlides: SlideData[];
    transitionFactory: TransitionFactory;
    animationFactory: AnimationFactory;
    muted: boolean;
};
type ActionRegistry = Map<string, Action<unknown, unknown>>;
interface IHilbertGalleryViewer {
    execute(action: string, arg: unknown): Promise<unknown>;
}
declare class HilbertGalleryViewer implements IHilbertGalleryViewer {
    protected actionRegistry: ActionRegistry;
    protected state: State;
    constructor(parent: HTMLElement, wrap?: boolean);
    protected static createActionRegistry(state: State): ActionRegistry;
    execute(action: string, arg: unknown): Promise<unknown>;
    static defineCustomElement(): void;
}
export default HilbertGalleryViewer;

//# sourceMappingURL=index.d.ts.map
