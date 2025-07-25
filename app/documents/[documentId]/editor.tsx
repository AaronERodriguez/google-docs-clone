'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import { TaskItem, TaskList } from '@tiptap/extension-list'
import StarterKit from '@tiptap/starter-kit'
import { TableKit } from '@tiptap/extension-table'
import Image from '@tiptap/extension-image'
import ImageResize from 'tiptap-extension-resize-image'
import Underline from '@tiptap/extension-underline'
import { FontFamily, TextStyle, Color, FontSize } from '@tiptap/extension-text-style'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'

import { useEditorStore } from '@/store/use-edit-store'
import { LineHeightExtension } from '@/extensions/line-height'
import Ruler from './ruler'

export const Editor = () => {
    const {setEditor} = useEditorStore();

    const editor = useEditor({
        immediatelyRender: false,
        onCreate({editor}) {
            setEditor(editor);
        },
        onDestroy() {
            setEditor(null)
        },
        onUpdate({editor}) {
            setEditor(editor);
        },
        onSelectionUpdate({editor}) {
            setEditor(editor);
        },
        onTransaction({editor}) {
            setEditor(editor);
        },
        onFocus({editor}) {
            setEditor(editor);
        },
        onBlur({editor}) {
            setEditor(editor);
        },
        onContentError({editor}) {
            setEditor(editor);
        },
        editorProps: {
            attributes: {
                style: "padding-left: 56px; padding-right: 56px",
                class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
            }
        },
        extensions: [
            StarterKit,
            LineHeightExtension.configure({
                types: ['heading', 'paragraph'],
                defaultLineHeight: "normal"
            }),
            FontSize,
            TextAlign.configure({
                types: ['heading', 'paragraph']
            }),
            Link.configure({
                openOnClick: false,
                autolink: true,
                defaultProtocol: "https",
            }),
            Color,
            Highlight.configure({multicolor: true}),
            FontFamily,
            TextStyle,
            Underline,
            TaskList,
            TaskItem.configure({
                nested: true,
            }),
            TableKit.configure({
                table: {resizable: true}
            }),
            Image,
            ImageResize,
        ],
        content: ``,
  })
    return (
        <div className='size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible'>
            <Ruler />
            <div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
                <EditorContent editor={editor} spellCheck={true}/>
            </div>
        </div>
    )
}