'use client'

import { Id } from '@/convex/_generated/dataModel'
import React, { useState } from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

type Props = {
    documentId: Id<'documents'>;
    children: React.ReactNode;
}

const RemoveDialog = ({documentId, children}: Props) => {

    const remove = useMutation(api.documents.removeById);
    const [isRemoving, setIsRemoving] = useState(false);

  return (
    <AlertDialog>
        <AlertDialogTrigger asChild>
            {children}
        </AlertDialogTrigger>
        <AlertDialogContent onClick={(e) => e.stopPropagation()}>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>This action cannot be undone. This will permanently delete your document.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction disabled={isRemoving} onClick={(e) => {
                    e.stopPropagation();
                    setIsRemoving(true);
                    remove({id: documentId})
                    .finally(() => setIsRemoving(false));
                }}>
                    Delete
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default RemoveDialog