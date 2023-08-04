function LoadLexendFont() {
    let style = document.createElement("style");

    style.type = "text/css";
    style.textContent = `
    @font-face {
        font-family: Lexend Black;
        src: url("http://localhost:1024/font/Lexend-Black.ttf");
    }
    
    @font-face {
        font-family: Lexend Bold;
        src: url("http://localhost:1024/font/Lexend-Bold.ttf");
    }
    
    @font-face {
        font-family: Lexend ExtraBold;
        src: url("http://localhost:1024/font/Lexend-ExtraBold.ttf");
    }
    
    @font-face {
        font-family: Lexend ExtraLight;
        src: url("http://localhost:1024/font/Lexend-ExtraLight.ttf");
    }

    @font-face {
        font-family: Lexend Light;
        src: url("http://localhost:1024/font/Lexend-Light.ttf");
    }
    
    @font-face {
        font-family: Lexend Medium;
        src: url("http://localhost:1024/font/Lexend-Medium.ttf");
    }
    
    @font-face {
        font-family: Lexend Regular;
        src: url("http://localhost:1024/font/Lexend-Regular.ttf");
    }
    
    @font-face {
        font-family: Lexend SemiBold;
        src: url("http://localhost:1024/font/Lexend-SemiBold.ttf");
    }
    
    @font-face {
        font-family: Lexend Thin;
        src: url("http://localhost:1024/font/Lexend-Thin.ttf");
    }
    `;

    document.head.appendChild(style);
}
