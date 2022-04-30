import React from 'react';

const Contacts =() =>{
const st={height:'500px', width:'500px',backgroundColor:'#FFA07A'}
    return (
        <body>
        <div id ="map" class ="map" style={st}></div>
            <script src="https://api-maps.yandex.ru/2.1/?apikey=7d344de3-4f34-4251-b407-3e61cff64a74&lang=ru_RU"/>
        <script src="script.js"/>
</body>

    );
}

export default Contacts;