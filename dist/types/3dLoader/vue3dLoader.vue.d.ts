import { Object3D, Vector2, Vector3, Color, Scene, Raycaster, WebGLRenderer, PerspectiveCamera, AnimationMixer, Clock, Light, AxesHelper, GridHelper } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export interface coordinates {
    x: number;
    y: number;
    z: number;
}
export interface controlsValue {
    min: number;
    max: number;
}
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    filePath: {
        type: (StringConstructor | ArrayConstructor)[];
        required: true;
    };
    fileType: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
    };
    width: {
        type: NumberConstructor;
        required: false;
    };
    height: {
        type: NumberConstructor;
        required: false;
    };
    position: {
        type: (ArrayConstructor | ObjectConstructor)[];
        required: false;
    };
    rotation: {
        type: (ArrayConstructor | ObjectConstructor)[];
        required: false;
    };
    scale: {
        type: (ArrayConstructor | ObjectConstructor)[];
        required: false;
    };
    lights: {
        type: ArrayConstructor;
        required: false;
        default: () => ({
            type: string;
            color: number;
            intensity: number;
            position?: undefined;
        } | {
            type: string;
            position: {
                x: number;
                y: number;
                z: number;
            };
            color: number;
            intensity: number;
        })[];
    };
    cameraPosition: {
        type: ObjectConstructor;
        required: false;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    cameraRotation: {
        type: ObjectConstructor;
        required: false;
    };
    cameraUp: {
        type: ObjectConstructor;
        required: false;
    };
    cameraLookAt: {
        type: ObjectConstructor;
        required: false;
    };
    backgroundColor: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: () => number;
    };
    backgroundAlpha: {
        type: NumberConstructor;
        required: false;
        default: () => number;
    };
    controlsOptions: {
        type: ObjectConstructor;
        required: false;
    };
    crossOrigin: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    requestHeader: {
        type: ObjectConstructor;
        required: false;
    };
    outputEncoding: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    webGLRendererOptions: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    mtlPath: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
        default: string;
    };
    showFps: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    textureImage: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
        default: string;
    };
    clearScene: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    parallelLoad: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    labels: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    autoPlay: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    enableDraco: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    dracoDir: {
        type: StringConstructor;
        required: false;
    };
    intersectRecursive: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    enableDamping: {
        type: BooleanConstructor;
        required: false;
    };
    dampingFactor: {
        type: NumberConstructor;
        required: false;
    };
    verticalCtrl: {
        type: (ObjectConstructor | BooleanConstructor)[];
        required: false;
        default: boolean;
    };
    horizontalCtrl: {
        type: (ObjectConstructor | BooleanConstructor)[];
        required: false;
        default: boolean;
    };
    plyMaterial: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    enableAxesHelper: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    axesHelperSize: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    enableGridHelper: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    minDistance: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    maxDistance: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    pointLightFollowCamera: {
        type: BooleanConstructor;
        required: false;
    };
    enableShadowMap: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>, {
    props: any;
    object: any;
    raycaster: Raycaster;
    mouse: Vector2;
    camera: PerspectiveCamera;
    clock: Clock;
    scene: Scene<import("three").Object3DEventMap>;
    renderer: WebGLRenderer;
    controls: OrbitControls<import("three").Camera>;
    allLights: Light[];
    loader: any;
    animationId: number;
    stats: any;
    mixers: AnimationMixer<import("three").AnimationMixerEventMap> | AnimationMixer<import("three").AnimationMixerEventMap>[];
    textureLoader: any;
    axesHelper: AxesHelper;
    gridHelper: GridHelper;
    resizeObserver: ResizeObserver | null;
    intersectionObserver: IntersectionObserver | null;
    isInViewport: boolean;
    renderLoopRunning: boolean;
    needsRender: boolean;
    resizeRaf: number;
    _lookAtTarget: Vector3;
    _clearColor: Color;
    size: import("vue").Ref<{
        width: any;
        height: any;
    }, {
        width: any;
        height: any;
    } | {
        width: any;
        height: any;
    }>;
    loaderIndex: import("vue").Ref<number, number>;
    objectPositionHasSet: import("vue").Ref<boolean, boolean>;
    isMultipleModels: import("vue").Ref<boolean, boolean>;
    containerElement: import("vue").Ref<null, null>;
    canvasElement: import("vue").Ref<null, null>;
    emit: (event: "mousedown" | "mousemove" | "mouseup" | "click" | "dblclick" | "load" | "process" | "error", ...args: any[]) => void;
    invalidate: () => void;
    ensureRenderLoop: () => void;
    pauseRenderLoop: () => void;
    isVisible: () => boolean;
    onDocumentVisibility: () => void;
    observeVisibility: () => void;
    animate: () => void;
    renderFrame: () => void;
    resetScene: () => void;
    destroyScene: () => void;
    disposeObject3D: (obj: Object3D) => void;
    init: () => void;
    setContainerElementStyle: (el: any) => void;
    enableMousemoveEvent: (enable: boolean) => void;
    onResize: () => void;
    onMouseDown: (event: MouseEvent) => void;
    onMouseMove: (event: MouseEvent) => void;
    onMouseUp: (event: MouseEvent) => void;
    onClick: (event: MouseEvent) => void;
    onDblclick: (event: MouseEvent) => void;
    pick: (x: number, y: number) => import("three").Intersection<Object3D<import("three").Object3DEventMap>> | null;
    update: () => void;
    updateModel: () => void;
    updateRenderer: () => void;
    updateCamera: (isResize?: boolean) => void;
    updateLights: () => void;
    updateControls: () => void;
    loadModelSelect: () => void;
    load: (fileIndex?: number) => Promise<void>;
    loadFilePath: (filePath: string, getObject: any, index: number) => void;
    loadMtl: (filePath: string, getObject: any, index: number) => Promise<void>;
    getObject: (object: any) => any;
    addObject: (obj: Object3D, filePath: string) => void;
    onProcess: (xhr: ProgressEvent) => void;
    addTexture: (object: Object3D, texture: any) => void;
    clearScene: () => void;
    setObjectAttribute: (type: string, val: any) => void;
    getAllObject: () => any;
    setSpriteLabel: () => void;
    clearSprite: () => void;
    generateCanvas: (text: string, style: any) => HTMLCanvasElement;
    getObjectIndex: (object: any) => any;
    playAnimations: () => void;
    playSingleModel: (item: Object3D) => void;
    playMultipleModels: (obj: Object3D) => void;
    setVerticalHorizontalControls: () => void;
    setAxesAndGridHelper: () => void;
    takePointLightFollowCamera: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("mousedown" | "mousemove" | "mouseup" | "click" | "dblclick" | "load" | "process" | "error")[], "mousedown" | "mousemove" | "mouseup" | "click" | "dblclick" | "load" | "process" | "error", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    filePath: {
        type: (StringConstructor | ArrayConstructor)[];
        required: true;
    };
    fileType: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
    };
    width: {
        type: NumberConstructor;
        required: false;
    };
    height: {
        type: NumberConstructor;
        required: false;
    };
    position: {
        type: (ArrayConstructor | ObjectConstructor)[];
        required: false;
    };
    rotation: {
        type: (ArrayConstructor | ObjectConstructor)[];
        required: false;
    };
    scale: {
        type: (ArrayConstructor | ObjectConstructor)[];
        required: false;
    };
    lights: {
        type: ArrayConstructor;
        required: false;
        default: () => ({
            type: string;
            color: number;
            intensity: number;
            position?: undefined;
        } | {
            type: string;
            position: {
                x: number;
                y: number;
                z: number;
            };
            color: number;
            intensity: number;
        })[];
    };
    cameraPosition: {
        type: ObjectConstructor;
        required: false;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    cameraRotation: {
        type: ObjectConstructor;
        required: false;
    };
    cameraUp: {
        type: ObjectConstructor;
        required: false;
    };
    cameraLookAt: {
        type: ObjectConstructor;
        required: false;
    };
    backgroundColor: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: () => number;
    };
    backgroundAlpha: {
        type: NumberConstructor;
        required: false;
        default: () => number;
    };
    controlsOptions: {
        type: ObjectConstructor;
        required: false;
    };
    crossOrigin: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    requestHeader: {
        type: ObjectConstructor;
        required: false;
    };
    outputEncoding: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    webGLRendererOptions: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    mtlPath: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
        default: string;
    };
    showFps: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    textureImage: {
        type: (StringConstructor | ArrayConstructor)[];
        required: false;
        default: string;
    };
    clearScene: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    parallelLoad: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    labels: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    autoPlay: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    enableDraco: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    dracoDir: {
        type: StringConstructor;
        required: false;
    };
    intersectRecursive: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    enableDamping: {
        type: BooleanConstructor;
        required: false;
    };
    dampingFactor: {
        type: NumberConstructor;
        required: false;
    };
    verticalCtrl: {
        type: (ObjectConstructor | BooleanConstructor)[];
        required: false;
        default: boolean;
    };
    horizontalCtrl: {
        type: (ObjectConstructor | BooleanConstructor)[];
        required: false;
        default: boolean;
    };
    plyMaterial: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    enableAxesHelper: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    axesHelperSize: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    enableGridHelper: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    minDistance: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    maxDistance: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    pointLightFollowCamera: {
        type: BooleanConstructor;
        required: false;
    };
    enableShadowMap: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & Readonly<{
    onMousedown?: ((...args: any[]) => any) | undefined;
    onMousemove?: ((...args: any[]) => any) | undefined;
    onMouseup?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onDblclick?: ((...args: any[]) => any) | undefined;
    onLoad?: ((...args: any[]) => any) | undefined;
    onProcess?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
}>, {
    lights: unknown[];
    cameraPosition: Record<string, any>;
    backgroundColor: string | number;
    backgroundAlpha: number;
    crossOrigin: string;
    outputEncoding: string;
    webGLRendererOptions: Record<string, any>;
    mtlPath: string | unknown[];
    showFps: boolean;
    textureImage: string | unknown[];
    clearScene: boolean;
    parallelLoad: boolean;
    labels: unknown[];
    autoPlay: boolean;
    enableDraco: boolean;
    intersectRecursive: boolean;
    enableDamping: boolean;
    verticalCtrl: boolean | Record<string, any>;
    horizontalCtrl: boolean | Record<string, any>;
    plyMaterial: string;
    enableAxesHelper: boolean;
    axesHelperSize: number;
    enableGridHelper: boolean;
    minDistance: number;
    maxDistance: number;
    pointLightFollowCamera: boolean;
    enableShadowMap: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
