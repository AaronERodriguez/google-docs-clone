import RemoveDialog from '@/components/remove-dialog';
import RenameDialog from '@/components/rename-dialog';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Id } from '@/convex/_generated/dataModel'
import { ExternalLinkIcon, FilePenIcon, MoreVertical, TrashIcon } from 'lucide-react';
import React from 'react'

type Props = {
    documentId: Id<"documents">;
    title: string;
    onNewTab: (id: Id<'documents'>) => void;
}

const DocumentMenu = ({documentId, title, onNewTab}: Props) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={'ghost'} size={'icon'} className='rounded-full'>
                <MoreVertical className='size-4' />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <RenameDialog documentId={documentId} initialTitle={title}>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()} onClick={(e) => e.stopPropagation()}>
                    <FilePenIcon className='size-4' />
                    Rename
                </DropdownMenuItem>
            </RenameDialog>
            <RemoveDialog documentId={documentId}>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()} onClick={(e) => e.stopPropagation()}>
                    <TrashIcon className='size-4' />
                    Remove
                </DropdownMenuItem>
            </RemoveDialog>
            <DropdownMenuItem onClick={() => onNewTab(documentId)}>
                <ExternalLinkIcon className='size-4' />
                Open in a new tab
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DocumentMenu