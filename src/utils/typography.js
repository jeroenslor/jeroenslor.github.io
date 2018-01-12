import Typography from 'typography';

const typography = new Typography({ 
    baseFontSize: '18px',
    headerFontFamily: ['Source Sans Pro'],
    headerWeight: '200',
    bodyFontFamily: ['Source Sans Pro'],
    bodyWeight: '400',
    googleFonts: [
        {
          name: 'Source Sans Pro',
          styles: [
            '200',
            '300',
            '400',
            '600',
            '700'
          ],
        }
      ],
});

export default typography;