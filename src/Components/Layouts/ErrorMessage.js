export const ErrorMessage = ({ errorMessage }) => {
  return (
    <div>
      {errorMessage && errorMessage.length > 0 && (
        <p className="text-red-recycle text-sm my-4 text-center">
          {errorMessage}
        </p>
      )}
    </div>
  )
}
