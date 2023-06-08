import { useEffect, useRef } from 'react'

const UploadWidget = ({ setAcceptedListingImages, acceptedListingImages }) => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dk1vkcts1',
        uploadPreset: 'arbcc9rc',
        resourceType: 'image',
        allowedFormats: ['jpg', 'jpeg', 'png'],
        maxFiles: 3,
      },
      function (err, res) {
        if (!err && res && res.event === 'success') {
          setAcceptedListingImages((prevFiles) => [
            ...prevFiles,
            res.info.original_filename,
          ])
        }
      }
    )
  })

  return (
    <section
      className="container border flex flex-col justify-center items-center border-green-recycle border-solid rounded-xl "
      onClick={() => {
        widgetRef.current.open()
      }}
    >
      <div>
        <p className="text-md text-gray-recycle text-center">
          Choisissez 3 photos maximum pour votre annonce.
        </p>

        <div className="flex items-center flex-col justify-center">
          <p className="fa-solid fa-plus text-center border border-gray-recycle w-8 h-8 px-2 py-2 rounded-full mx-auto my-2 text-gray-recycle"></p>
          {acceptedListingImages.length > 0 && (
            <div>
              <p>Fichiers téléchargés</p>

              <ul>
                {acceptedListingImages.map((file) => (
                  <li key={file}>{file}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
export default UploadWidget
