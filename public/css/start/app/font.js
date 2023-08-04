function LoadLexendFont() {
    let style = document.createElement("style");

    style.type = "text/css";
    style.textContent = `
    @font-face {
        font-family: Lexend Black;
        src: url("font/Lexend-Black.ttf");
    }
    
    @font-face {
        font-family: Lexend Bold;
        src: url("font/Lexend-Bold.ttf");
    }
    
    @font-face {
        font-family: Lexend ExtraBold;
        src: url("font/Lexend-ExtraBold.ttf");
    }
    
    @font-face {
        font-family: Lexend ExtraLight;
        src: url("font/Lexend-ExtraLight.ttf");
    }

    @font-face {
        font-family: Lexend Light;
        src: url("font/Lexend-Light.ttf");
    }
    
    @font-face {
        font-family: Lexend Medium;
        src: url("font/Lexend-Medium.ttf");
    }
    
    @font-face {
        font-family: Lexend Regular;
        src: url("font/Lexend-Regular.ttf");
    }
    
    @font-face {
        font-family: Lexend SemiBold;
        src: url("font/Lexend-SemiBold.ttf");
    }
    
    @font-face {
        font-family: Lexend Thin;
        src: url("font/Lexend-Thin.ttf");
    }
    `;

    document.head.appendChild(style);
}
