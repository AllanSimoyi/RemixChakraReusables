interface Props {
  error: Error
  customerCareLink: string;
}

export function RootBoundaryError ({ error, customerCareLink }: Props) {

  return (
    <div className="shadow-md rounded-lg p-6 space-y-2">
      <h1 className="text-xl font-bold">
        Error 500 - Internal Server Error
      </h1>
      <p>
        We encountered an unexpected error. We're already working on fixing it. <br />
        {error.message && (
          <div className="font-bold py-2">
            Detail: "{error.message}" <br />
          </div>
        )}
        Please try reloading the page. <br />
        If the issue pesists, <a className="underline text-blue-500" href={customerCareLink}>contact Customer Care</a>.
      </p>
    </div>
  )
}