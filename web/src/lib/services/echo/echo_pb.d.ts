// package: goreact.echo
// file: services/echo/echo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Embedded extends jspb.Message { 

    hasProgress(): boolean;
    clearProgress(): void;
    getProgress(): number;
    setProgress(value: number): Embedded;

    hasNote(): boolean;
    clearNote(): void;
    getNote(): string;
    setNote(value: string): Embedded;

    getMarkCase(): Embedded.MarkCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Embedded.AsObject;
    static toObject(includeInstance: boolean, msg: Embedded): Embedded.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Embedded, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Embedded;
    static deserializeBinaryFromReader(message: Embedded, reader: jspb.BinaryReader): Embedded;
}

export namespace Embedded {
    export type AsObject = {
        progress: number,
        note: string,
    }

    export enum MarkCase {
        MARK_NOT_SET = 0,
        PROGRESS = 1,
        NOTE = 2,
    }

}

export class SimpleMessage extends jspb.Message { 
    getId(): string;
    setId(value: string): SimpleMessage;
    getNum(): number;
    setNum(value: number): SimpleMessage;

    hasLineNum(): boolean;
    clearLineNum(): void;
    getLineNum(): number;
    setLineNum(value: number): SimpleMessage;

    hasLang(): boolean;
    clearLang(): void;
    getLang(): string;
    setLang(value: string): SimpleMessage;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): Embedded | undefined;
    setStatus(value?: Embedded): SimpleMessage;

    hasEn(): boolean;
    clearEn(): void;
    getEn(): number;
    setEn(value: number): SimpleMessage;

    hasNo(): boolean;
    clearNo(): void;
    getNo(): Embedded | undefined;
    setNo(value?: Embedded): SimpleMessage;

    getCodeCase(): SimpleMessage.CodeCase;
    getExtCase(): SimpleMessage.ExtCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimpleMessage.AsObject;
    static toObject(includeInstance: boolean, msg: SimpleMessage): SimpleMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimpleMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimpleMessage;
    static deserializeBinaryFromReader(message: SimpleMessage, reader: jspb.BinaryReader): SimpleMessage;
}

export namespace SimpleMessage {
    export type AsObject = {
        id: string,
        num: number,
        lineNum: number,
        lang: string,
        status?: Embedded.AsObject,
        en: number,
        no?: Embedded.AsObject,
    }

    export enum CodeCase {
        CODE_NOT_SET = 0,
        LINE_NUM = 3,
        LANG = 4,
    }

    export enum ExtCase {
        EXT_NOT_SET = 0,
        EN = 6,
        NO = 7,
    }

}

export class DynamicMessage extends jspb.Message { 

    hasStructField(): boolean;
    clearStructField(): void;
    getStructField(): google_protobuf_struct_pb.Struct | undefined;
    setStructField(value?: google_protobuf_struct_pb.Struct): DynamicMessage;

    hasValueField(): boolean;
    clearValueField(): void;
    getValueField(): google_protobuf_struct_pb.Value | undefined;
    setValueField(value?: google_protobuf_struct_pb.Value): DynamicMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicMessage.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicMessage): DynamicMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicMessage;
    static deserializeBinaryFromReader(message: DynamicMessage, reader: jspb.BinaryReader): DynamicMessage;
}

export namespace DynamicMessage {
    export type AsObject = {
        structField?: google_protobuf_struct_pb.Struct.AsObject,
        valueField?: google_protobuf_struct_pb.Value.AsObject,
    }
}

export class DynamicMessageUpdate extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): DynamicMessage | undefined;
    setBody(value?: DynamicMessage): DynamicMessageUpdate;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): DynamicMessageUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicMessageUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicMessageUpdate): DynamicMessageUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicMessageUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicMessageUpdate;
    static deserializeBinaryFromReader(message: DynamicMessageUpdate, reader: jspb.BinaryReader): DynamicMessageUpdate;
}

export namespace DynamicMessageUpdate {
    export type AsObject = {
        body?: DynamicMessage.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}
