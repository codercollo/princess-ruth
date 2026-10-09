export interface GalleryItem {
  id: string
  name: string
  fabric: string
  occasion: string
  category: 'traditional' | 'official' | 'occasion' | 'bridal-party' | 'repairs' | 'jewellery' | 'intimates'
  image: string
  alt: string
  aspect: '3:4' | '1:1' | '4:5' | '2:3'
  featured?: boolean
}
