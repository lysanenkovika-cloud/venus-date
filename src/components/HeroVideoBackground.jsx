import React from "react";
import Box from "@mui/material/Box";

/**
 * Full-bleed background video with overlay content.
 * Requirements for autoplay on mobile:
 *  - muted
 *  - playsInline
 *  - no audio tracks
 */
export default function HeroVideoBackground({
                                                srcMp4,
                                                srcWebm,           // optional
                                                poster,            // fallback image while loading
                                                children,          // your overlay content
                                                height = "70vh",   // you can tweak
                                            }) {
    return (
        <Box position="relative" width="100%" height={height} overflow="hidden">
            {/* Video layer */}
            <Box
                component="video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={poster}
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                    // prevent iOS zoom on tap
                    pointerEvents: "none",
                }}
            >
                {/* WebM first (if you have it), then MP4 as fallback */}
                {srcWebm && <source src={srcWebm} type="video/webm" />}
                <source src={srcMp4} type="video/mp4" />
            </Box>

            {/* Optional dark/gradient overlay for text contrast */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background:
                        "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.45) 100%)",
                }}
            />

            {/* Content layer */}
            <Box
                position="relative"
                zIndex={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
                textAlign="center"
                px={{ xs: 2, md: 4 }}
            >
                {children}
            </Box>
        </Box>
    );
}