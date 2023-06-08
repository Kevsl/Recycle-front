import { useEffect, useRef, useState } from 'react'

const UploadWidget = ({ setAcceptedListingImages, acceptedListingImages }) => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  const [filesNames, setFilesNames] = useState([])

  useEffect(() => {
    console.log(acceptedListingImages)
  }, [acceptedListingImages])

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CDN_NAME,
        uploadPreset: process.env.REACT_APP_CDN_KEY,
        resourceType: 'image',
        allowedFormats: ['jpg', 'jpeg', 'png'],
        maxFiles: 3,
      },
      function (err, res) {
        console.log(res)
        if (!err && res && res.event === 'success') {
          setAcceptedListingImages((prevFiles) => [
            ...prevFiles,
            res.info.secure_url,
          ])

          setFilesNames((prevFiles) => [
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
          {filesNames.length > 0 && (
            <div>
              <p>Fichiers téléchargés</p>

              <ul>
                {filesNames.map((file, i) => (
                  <li key={`${file}${i}`}>{file}</li>
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
