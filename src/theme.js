import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'h2'
                    },
                    style: {
                        fontSize: 36,
                        margin: "18px 0px",
                        fontWeight: "bold",
                        width: "356px",
                        height: "74px",
                    }
                },
                {
                    props: {
                        variant: 'h3'
                    },
                    style: {
                        fontSize: 36,
                        margin: "18px 0px",
                        fontWeight: "bold",
                        width: "250px",
                        height: "66px",
                    }
                },
                {
                    props: {
                        variant: 'body2'
                    },
                    style: {
                        fontSize: 24,
                        lineHeight: "29px",
                        margin: "0px 10px",
                        fontWeight: "normal",
                        textAlign: "center",
                    }
                },
                {
                    props: {
                        variant: 'body3'
                    },
                    style: {
                        fontSize: 18,
                        lineHeight: "24px",
                        margin: "0px 10px",
                        fontWeight: "600",
                        color: "#141414",
                    }
                },
                {
                    props: {
                        variant: 'body4'
                    },
                    style: {
                        fontSize: 14,
                        lineHeight: "24px",
                        margin: "0px 8px",
                        fontWeight: "bold",
                    }
                },
                {
                    props: {
                        variant: 'body5'
                    },
                    style: {
                        fontSize: 12,
                        lineHeight: "24px",
                        margin: "0px 10px",
                        fontWeight: "bold",
                    }
                },
                {
                    props: {
                        variant: 'body6'
                    },
                    style: {
                        fontSize: 16,
                        lineHeight: "23px",
                        margin: "0px 10px",
                        fontWeight: "normal",
                    }
                },
                {
                    props: {
                        variant: 'subtitle1'
                    },
                    style: {
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "14px",
                        lineHeight: "18px",
                    }
                },
                {
                    props: {
                        variant: 'subtitle2'
                    },
                    style: {
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "18px",
                        lineHeight: "24px",
                    }
                },
                
            ]
        }
    }
})
