import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Doc } from '@/convex/_generated/dataModel'
import { PaginationStatus } from 'convex/react';
import { LoaderIcon } from 'lucide-react';
import React from 'react'
import DocumentRow from './document-row';
import { Button } from '@/components/ui/button';

type Props = {
    documents: Doc<"documents">[] | undefined;
    loadMore: (numItems: number) => void;
    status: PaginationStatus;
}

const DocumentsTable = ({documents, loadMore, status}: Props) => {
  return (
    <div className='max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-5'>
        {documents === undefined ? (
            <div className='flex justify-center items-center h-24'>
                <LoaderIcon className='animate-spin text-muted-foreground size-5' />
            </div>
        ) : (
            <Table>
                <TableHeader>
                    <TableRow className='hover:bg-transparent border-none'>
                        <TableHead>Name</TableHead>
                        <TableHead>&nbsp;</TableHead>
                        <TableHead className='hidden md:table-cell'>Shared</TableHead>
                        <TableHead className='hidden md:table-cell'>Created at</TableHead>
                    </TableRow>
                </TableHeader>
                {documents.length === 0 ? (
                    <TableBody>
                        <TableRow className='hover:bg-transparent'>
                            <TableCell colSpan={4} className='h-24 text-center text-muted-foreground'>
                                No Documents Found
                            </TableCell>
                        </TableRow>
                    </TableBody> )
                : (
                    <TableBody>
                        {documents.map((document) => (
                            <DocumentRow key={document._id} document={document} />
                        ))}
                    </TableBody> 
                )}
            </Table>
        )}
        <div className='flex items-center justify-center'>
            <Button variant={'ghost'} size={'sm'} onClick={() => loadMore(5)} disabled={status !== 'CanLoadMore'}>
                {status === 'CanLoadMore' ? 'Load more': "End of results"}
            </Button>
        </div>
    </div>
  )
}

export default DocumentsTable