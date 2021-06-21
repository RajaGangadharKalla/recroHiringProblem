import React, { CSSProperties } from 'react';


export interface componentStyles {
    loading: CSSProperties;
    loadingText: CSSProperties;
}

const loadingStyles: componentStyles = {
    loading: {
        height: '100%',
        width: '100%',
        color: 'purple',
        background: 'rgba(0,0,0,0.3)',
        display: 'flex',
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        fontSize: '30px'
    }
}

export default function LoadingComponent() {
    return (
        <div className='loading' style={loadingStyles.loading}>
            <div className='loading-text' style={loadingStyles.loadingText}>Loading...</div>
        </div>
    )
}