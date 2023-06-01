import { useDropzone } from 'react-dropzone'
import React, { useState, useEffect } from 'react'

export const AcceptMaxFiles = ({ setAcceptedListingImages }) => {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 3,
      maxSize: 4000000,
      accept: {
        'image/png': ['.png', '.jpg', '.jpeg'],
      },
    })

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ))

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        {file.path}
        <ul>
          {errors.map((e) => (
            <li key={e.code} className="text-xs text-red-recycle">
              Seuls les fichiers au format JPG/PNG de moins de 4MO sont acceptés
            </li>
          ))}
        </ul>
      </li>
    )
  })

  useEffect(() => {
    setAcceptedListingImages(acceptedFiles)
  }, [acceptedFileItems, acceptedFiles, setAcceptedListingImages])

  return (
    <section className="container border flex flex-col justify-center items-center border-green-recycle border-solid rounded-xl ">
      <div {...getRootProps({ className: 'dropzone w-full' })}>
        <input {...getInputProps()} />
        <p className="text-md text-gray-recycle text-center">
          Choisissez 3 photos maximum pour votre annonce.
        </p>

        <div className="flex items-center flex-col justify-center">
          <p className="fa-solid fa-plus text-center border border-gray-recycle w-8 h-8 px-2 py-2 rounded-full mx-auto my-2 text-gray-recycle"></p>
          <p className="text-xs text-gray-recycle">
            Glissez les fichiers ou cliquez
          </p>
        </div>
      </div>
      <aside>
        {acceptedFileItems.length > 0 && (
          <div>
            <p className="text-xs font-ital text-gray-recycle">
              Fichiers uploadés
            </p>
            <ul>{acceptedFileItems}</ul>
          </div>
        )}
        {fileRejectionItems.length > 0 && (
          <div>
            <p className="text-xs font-ital text-gray-recycle">
              Fichiers rejetés
            </p>
            <ul>{fileRejectionItems}</ul>
          </div>
        )}
      </aside>
    </section>
  )
}
