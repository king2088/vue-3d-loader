import { Object3D, Vector2, Scene, Raycaster, WebGLRenderer, PerspectiveCamera, Clock, Light } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export interface Coordinates {
    x: number;
    y: number;
    z: number;
}
declare const _default: import("vue").DefineComponent<{
    filePath: {
        type: (StringConstructor | ArrayConstructor)[];
        required: true;
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
        type: ObjectConstructor;
        required: false;
    };
    rotation: {
        type: ObjectConstructor;
        required: false;
    };
    scale: {
        type: ObjectConstructor;
        required: false;
    };
    lights: {
        type: ArrayConstructor;
        required: false;
        default: () => ({
            type: string;
            color: number;
            position?: undefined;
            intensity?: undefined;
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
        type: NumberConstructor;
        required: false;
        default: () => import("three").TextureEncoding;
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
}, {
    props: {
        filePath: string | string[];
        width?: number | undefined;
        height?: number | undefined;
        position?: Coordinates | undefined;
        rotation?: Coordinates | undefined;
        scale?: Coordinates | undefined;
        lights: object[];
        cameraPosition: Coordinates;
        cameraRotation?: Coordinates | undefined;
        cameraUp?: Coordinates | undefined;
        cameraLookAt?: Coordinates | undefined;
        backgroundColor: number | string;
        backgroundAlpha: number;
        controlsOptions?: object | undefined;
        crossOrigin: string;
        requestHeader?: object | undefined;
        outputEncoding: number;
        webGLRendererOptions: object;
        mtlPath: string | string[];
        showFps: boolean;
        textureImage: string | string[];
        clearScene: boolean;
        parallelLoad: boolean;
        labels: object[];
    };
    object: any;
    raycaster: Raycaster;
    mouse: Vector2;
    camera: PerspectiveCamera;
    scene: Scene;
    wrapper: Object3D<import("three").Event>;
    renderer: WebGLRenderer;
    controls: OrbitControls;
    allLights: Light[];
    clock: Clock;
    loader: any;
    requestAnimationId: number;
    stats: any;
    mixer: any;
    textureLoader: any;
    size: import("vue").Ref<{
        width: number;
        height: number;
    }>;
    loaderIndex: import("vue").Ref<number>;
    timer: import("vue").Ref<any>;
    objectPositionHasSet: import("vue").Ref<boolean>;
    mouseMoveTimer: import("vue").Ref<null>;
    isMultipleModels: import("vue").Ref<boolean>;
    containerElement: import("vue").Ref<null>;
    canvasElement: import("vue").Ref<null>;
    emit: (event: "mousedown" | "mousemove" | "mouseup" | "click" | "dblclick" | "load" | "process" | "error", ...args: any[]) => void;
    onResize: () => void;
    onMouseDown: (event: MouseEvent) => void;
    onMouseMove: (event: MouseEvent) => void;
    onMouseUp: (event: MouseEvent) => void;
    onClick: (event: MouseEvent) => void;
    onDblclick: (event: MouseEvent) => void;
    pick: (x: number, y: number) => import("three").Intersection<Object3D<import("three").Event>> | null | undefined;
    update: (isResize?: boolean) => void;
    updateModel: () => void;
    updateRenderer: () => void;
    updateCamera: (isResize?: boolean) => void;
    updateLights: () => void;
    updateControls: () => void;
    loadModelSelect: () => void;
    load: (fileIndex?: number) => void;
    loadFilePath: (filePath: string, getObject: any, index: number) => void;
    loadMtl: (filePath: string, getObject: any, index: number) => void;
    getObject: (object: any) => any;
    addObject: (obj: Object3D, filePath: string) => void;
    animate: () => void;
    render: () => void;
    updateStats: () => void;
    onProcess: (xhr: ProgressEvent) => void;
    addTexture: (object: Object3D, texture: any) => void;
    clearSceneWrapper: () => void;
    setObjectAttribute: (type: string, val: any) => void;
    getAllObject: () => any;
    setLabel: () => void;
    setSpriteLabel: () => void;
    generateCanvas: (text: string, style: any) => HTMLCanvasElement;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("mousedown" | "mousemove" | "mouseup" | "click" | "dblclick" | "load" | "process" | "error")[], "mousedown" | "mousemove" | "mouseup" | "click" | "dblclick" | "load" | "process" | "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    filePath: {
        type: (StringConstructor | ArrayConstructor)[];
        required: true;
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
        type: ObjectConstructor;
        required: false;
    };
    rotation: {
        type: ObjectConstructor;
        required: false;
    };
    scale: {
        type: ObjectConstructor;
        required: false;
    };
    lights: {
        type: ArrayConstructor;
        required: false;
        default: () => ({
            type: string;
            color: number;
            position?: undefined;
            intensity?: undefined;
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
        type: NumberConstructor;
        required: false;
        default: () => import("three").TextureEncoding;
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
}>> & {
    onMousedown?: ((...args: any[]) => any) | undefined;
    onMousemove?: ((...args: any[]) => any) | undefined;
    onMouseup?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onDblclick?: ((...args: any[]) => any) | undefined;
    onLoad?: ((...args: any[]) => any) | undefined;
    onProcess?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
}, {
    lights: unknown[];
    cameraPosition: Record<string, any>;
    backgroundColor: string | number;
    backgroundAlpha: number;
    crossOrigin: string;
    outputEncoding: number;
    webGLRendererOptions: Record<string, any>;
    mtlPath: string | unknown[];
    showFps: boolean;
    textureImage: string | unknown[];
    clearScene: boolean;
    parallelLoad: boolean;
    labels: unknown[];
}>;
export default _default;
