import { defineStore } from 'pinia'

export const storeData = defineStore('poiStore', {
  state: () => ({
    info: '🍍PINIA is running🍍!',
    userData: [
      {
        id: 101,
        userName: 'Karl Otto',
        eMailAddress: 'karl@otto.de'
      },
      {
        id: 102,
        userName: 'Sven Marquardt',
        eMailAddress: 'sven@marquardt.de'
      },
      {
        id: 103,
        userName: 'Ringo Bingo',
        eMailAddress: 'ringo@bingo.de'
      }
    ],
    poiData: [
      {
        id: 201,
        category: 'Fahrstuhl',
        detailCategories: { 'elevator-size': 'large' },
        xCoordinates: 52.55347266835718,
        yCoordinates: 13.412074165422549,
        minWidth: 92
      },
      {
        id: 202,
        category: 'Toilette',
        detailCategories: {
          'handicapped-accessible': true,
          'changing station': true,
          'free-of-charge': false
        },
        xCoordinates: 52.55347266835722,
        yCoordinates: 13.412074165422512,
        minWidth: 122
      },
      {
        id: 203,
        category: 'Türbreite',
        detailCategories: {},
        xCoordinates: 52.55347266835722,
        yCoordinates: 13.412074165422512,
        minWidth: 122
      }
    ]
  })
})
