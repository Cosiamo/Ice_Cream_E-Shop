interface Props {
    name: string
    image: string
}

function BoxSlide({name, image}: Props) {
    return (
        <div className='flavors__box'>
            <div>
                <img 
                    className='py-2'
                    src={image}
                />
                <h1 className='text-lg font-bold py-1 px-1
                    lg:py-3
                    xl:py-6'
                >
                    {name}
                </h1>
            </div>
        </div>
    )
}

export default BoxSlide