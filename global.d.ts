declare namespace JSX {
    interface IntrinsicElements {
        'model-viewer': React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        > & {
            src?: string;
            alt?: string;
            ar?: boolean;
            cameraControls?: boolean;
            autoplay?: boolean;
            shadowIntensity?: string;
            touchAction?: string;
        };
    }
}
