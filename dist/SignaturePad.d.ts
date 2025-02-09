import * as React from 'react';
import SigPad, { Options, PointGroup } from 'signature_pad';
declare type Props = {
    width?: number;
    height?: number;
    options?: Options;
    canvasProps?: {
        [key: string]: string | {
            [key: string]: string;
        };
    };
} & DefaultProps;
declare type DefaultProps = {
    redrawOnResize: boolean;
    debounceInterval: number;
};
declare type State = {
    canvasWidth: number;
    canvasHeight: number;
};
declare class SignaturePad extends React.PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: DefaultProps;
    private canvasRef;
    private signaturePad;
    private callResizeHandler;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    get instance(): SigPad;
    get canvas(): React.RefObject<HTMLCanvasElement>;
    set dotSize(dotSize: number | (() => number));
    get dotSize(): number | (() => number);
    set minWidth(minWidth: number);
    get minWidth(): number;
    set maxWidth(maxWidth: number);
    get maxWidth(): number;
    set throttle(throttle: number);
    get throttle(): number;
    set backgroundColor(color: string);
    get backgroundColor(): string;
    set penColor(color: string);
    get penColor(): string;
    set velocityFilterWeight(weight: number);
    get velocityFilterWeight(): number;
    set onBegin(fn: ((event: MouseEvent | Touch) => void) | undefined);
    set onEnd(fn: ((event: MouseEvent | Touch) => void) | undefined);
    isEmpty(): boolean;
    clear(): void;
    fromDataURL(base64String: string): void;
    toDataURL(type?: string, encoderOptions?: number): string;
    fromData(data: PointGroup[]): void;
    toData(): PointGroup[];
    off(): void;
    on(): void;
    handleResize(): void;
    scaleCanvas(): void;
    render(): React.ReactNode;
}
export default SignaturePad;
