
export default function ErrorPage({ error }: { error: { statusText?: string; message?: string } }) {
  console.error(error);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error.statusText || error.message) as string}</i>
      </p>
    </div>
  )
}