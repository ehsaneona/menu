declare namespace JSX {
    interface IntrinsicElements {
        'model-viewer': React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        > & {
            src?: string;
            alt?: string;
            ar?: boolean;
            'camera-controls'?: boolean;
            autoplay?: boolean;
            'shadow-intensity'?: string;
            'touch-action'?: string;
        };
    }
}
