export default function LoadingPage({ setLoad }: { setLoad: boolean }) {
    return (<>
        <div className={`z-50 overflow-auto inset-0 w-full h-full fixed py-6 ${setLoad ? '' : 'hidden'}`}>
            <div className="z-50 relative p-3 my-0 w-full h-full align-middle content-center justify-center flex">
                <div className="w-20 h-20 items-center justify-center m-auto bg-white rounded shadow-lg border flex flex-col overflow-hidden">
                    <div className="flex w-fill justify-center p-12">
                        <svg className="animate-spin h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="z-10 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50"></div>
        </div>
    </>)
}