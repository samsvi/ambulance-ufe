/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SsesAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface SsesAmbulanceWlEditor {
        "ambulanceId": string;
        "apiBase": string;
        "entryId": string;
    }
    interface SsesAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface SsesAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSsesAmbulanceWlEditorElement;
}
export interface SsesAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSsesAmbulanceWlListElement;
}
declare global {
    interface HTMLSsesAmbulanceWlAppElement extends Components.SsesAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLSsesAmbulanceWlAppElement: {
        prototype: HTMLSsesAmbulanceWlAppElement;
        new (): HTMLSsesAmbulanceWlAppElement;
    };
    interface HTMLSsesAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLSsesAmbulanceWlEditorElement extends Components.SsesAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLSsesAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLSsesAmbulanceWlEditorElement, ev: SsesAmbulanceWlEditorCustomEvent<HTMLSsesAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLSsesAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLSsesAmbulanceWlEditorElement, ev: SsesAmbulanceWlEditorCustomEvent<HTMLSsesAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLSsesAmbulanceWlEditorElement: {
        prototype: HTMLSsesAmbulanceWlEditorElement;
        new (): HTMLSsesAmbulanceWlEditorElement;
    };
    interface HTMLSsesAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLSsesAmbulanceWlListElement extends Components.SsesAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLSsesAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLSsesAmbulanceWlListElement, ev: SsesAmbulanceWlListCustomEvent<HTMLSsesAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLSsesAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLSsesAmbulanceWlListElement, ev: SsesAmbulanceWlListCustomEvent<HTMLSsesAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLSsesAmbulanceWlListElement: {
        prototype: HTMLSsesAmbulanceWlListElement;
        new (): HTMLSsesAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "sses-ambulance-wl-app": HTMLSsesAmbulanceWlAppElement;
        "sses-ambulance-wl-editor": HTMLSsesAmbulanceWlEditorElement;
        "sses-ambulance-wl-list": HTMLSsesAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface SsesAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface SsesAmbulanceWlEditor {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: SsesAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface SsesAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: SsesAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "sses-ambulance-wl-app": SsesAmbulanceWlApp;
        "sses-ambulance-wl-editor": SsesAmbulanceWlEditor;
        "sses-ambulance-wl-list": SsesAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sses-ambulance-wl-app": LocalJSX.SsesAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLSsesAmbulanceWlAppElement>;
            "sses-ambulance-wl-editor": LocalJSX.SsesAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLSsesAmbulanceWlEditorElement>;
            "sses-ambulance-wl-list": LocalJSX.SsesAmbulanceWlList & JSXBase.HTMLAttributes<HTMLSsesAmbulanceWlListElement>;
        }
    }
}
