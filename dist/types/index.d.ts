import { App } from 'vue';
import * as Three from 'three';
import vue3dLoader from './3dLoader/vue3dLoader.vue';
export { Three };
declare const _default: {
    install: (app: App<any>) => void;
    vue3dLoader: import("vue").DefineComponent<{
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
    }, {
        props: {
            filePath: string | string[];
            fileType?: string | string[] | undefined;
            width?: number | undefined;
            height?: number | undefined;
            position?: import("./3dLoader/vue3dLoader.vue").coordinates | import("./3dLoader/vue3dLoader.vue").coordinates[] | undefined;
            rotation?: import("./3dLoader/vue3dLoader.vue").coordinates | import("./3dLoader/vue3dLoader.vue").coordinates[] | undefined;
            scale?: import("./3dLoader/vue3dLoader.vue").coordinates | import("./3dLoader/vue3dLoader.vue").coordinates[] | undefined;
            lights: object[];
            cameraPosition: import("./3dLoader/vue3dLoader.vue").coordinates;
            cameraRotation?: import("./3dLoader/vue3dLoader.vue").coordinates | undefined;
            cameraUp?: import("./3dLoader/vue3dLoader.vue").coordinates | undefined;
            cameraLookAt?: import("./3dLoader/vue3dLoader.vue").coordinates | undefined;
            backgroundColor: string | number;
            backgroundAlpha: number;
            controlsOptions?: object | undefined;
            crossOrigin: string;
            requestHeader?: object | undefined;
            outputEncoding: "linear" | "sRGB";
            webGLRendererOptions: object;
            mtlPath: string | string[];
            showFps: boolean;
            textureImage: string | string[];
            clearScene: boolean;
            parallelLoad: boolean;
            labels: object[];
            autoPlay: boolean;
            enableDraco: boolean;
            dracoDir?: string | undefined;
            intersectRecursive: boolean;
            enableDamping?: boolean | undefined;
            dampingFactor?: number | undefined;
        };
        object: any;
        raycaster: Three.Raycaster;
        mouse: Three.Vector2;
        camera: Three.PerspectiveCamera;
        scene: Three.Scene;
        clock: Three.Clock;
        wrapper: Three.Object3D<Three.Event>;
        renderer: Three.WebGLRenderer;
        controls: import("three/examples/jsm/controls/OrbitControls").OrbitControls;
        allLights: Three.Light[];
        loader: any;
        requestAnimationId: number;
        stats: any;
        mixers: Three.AnimationMixer | Three.AnimationMixer[];
        textureLoader: any;
        size: import("vue").Ref<{
            width: number;
            height: number;
        }>;
        loaderIndex: import("vue").Ref<number>;
        objectPositionHasSet: import("vue").Ref<boolean>;
        isMultipleModels: import("vue").Ref<boolean>;
        containerElement: import("vue").Ref<null>;
        canvasElement: import("vue").Ref<null>;
        emit: (event: "mousedown" | "mousemove" | "mouseup" | "click" | "dblclick" | "load" | "process" | "error", ...args: any[]) => void;
        setContainerElementStyle: (el: any) => void;
        enableMousemoveEvent: (enable: boolean) => void;
        onResize: () => void;
        onMouseDown: (event: MouseEvent) => void;
        onMouseMove: (event: MouseEvent) => void;
        onMouseUp: (event: MouseEvent) => void;
        onClick: (event: MouseEvent) => void;
        onDblclick: (event: MouseEvent) => void;
        pick: (x: number, y: number) => Three.Intersection<Three.Object3D<Three.Event>> | null;
        update: () => void;
        updateModel: () => void;
        updateRenderer: () => void;
        updateCamera: (isResize?: boolean | undefined) => void;
        updateLights: () => void;
        updateControls: () => void;
        loadModelSelect: () => void;
        load: (fileIndex?: number | undefined) => void;
        loadFilePath: (filePath: string, getObject: any, index: number) => void;
        loadMtl: (filePath: string, getObject: any, index: number) => void;
        getObject: (object: any) => any;
        addObject: (obj: Three.Object3D<Three.Event>, filePath: string) => void;
        animate: () => void;
        render: () => void;
        updateStats: () => void;
        onProcess: (xhr: ProgressEvent<EventTarget>) => void;
        addTexture: (object: Three.Object3D<Three.Event>, texture: any) => void;
        clearSceneWrapper: () => void;
        setObjectAttribute: (type: string, val: any) => void;
        getAllObject: () => any;
        setLabel: () => void;
        setSpriteLabel: () => void;
        generateCanvas: (text: string, style: any) => HTMLCanvasElement;
        getObjectIndex: (object: any) => any;
        playAnimations: () => void;
        playSingleModel: (item: Three.Object3D<Three.Event>) => void;
        playMultipleModels: (obj: Three.Object3D<Three.Event>) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("mousedown" | "mousemove" | "mouseup" | "click" | "dblclick" | "load" | "process" | "error")[], "mousedown" | "mousemove" | "mouseup" | "click" | "dblclick" | "load" | "process" | "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    }>;
};
export default _default;
export { vue3dLoader };
