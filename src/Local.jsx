function Local({ cep, nome, endereco }) {

    return (
        <div className="local__mark">
            <div className="local__mark-img">
                <img src="https://purepng.com/public/uploads/large/purepng.com-maps-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596077lvnue.png" alt="" />
            </div>
            <div className="local__mark-dados">
                <p>{cep}</p>
                <p>{nome}</p>
                <p>{endereco}</p>
            </div>
        </div >
    );
}

export default Local;