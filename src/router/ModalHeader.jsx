
const ModalHeader = (data) => {
    return (
        <>
            <div className="mod">
                <div className="modulo">
                    <div className="contenido">
                        {data.data.map((element)=><a href="" key={element}><div className="btn_menu">{element}</div></a>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalHeader