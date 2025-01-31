import { ComponentTag, inject } from '.'
import type AnthemeImage from './image'

export default class DomCacheService {
  private static instance?: DomCacheService
  private readonly cacheDomElementTag = new ComponentTag('cache')
  private readonly cache = inject(Window).document.createElement(
    this.cacheDomElementTag.toString()
  )

  private constructor() {
    this.cache.style.display = 'none'
    inject(Window).document.body.appendChild(this.cache)
  }

  static getInstance(): DomCacheService {
    if (DomCacheService.instance === undefined) {
      DomCacheService.instance = new DomCacheService()
    }
    return DomCacheService.instance
  }

  async preloadImage({ src }: AnthemeImage): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      const image = new Image()
      image.onload = () => {
        resolve()
      }
      image.onerror = reject
      image.src = src
      this.cache.appendChild(image)
    })
  }
}
