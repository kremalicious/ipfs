import Environment from 'jest-environment-jsdom'

/**
 * A custom environment to set the TextEncoder required by ipfs-http-client.
 */
module.exports = class CustomTestEnvironment extends Environment {
  async setup() {
    await super.setup()
    if (typeof this.global.TextEncoder === 'undefined') {
      const { TextEncoder } = require('util')
      this.global.TextEncoder = TextEncoder
    }
    if (typeof this.global.TextDecoder === 'undefined') {
      const { TextDecoder } = require('util')
      this.global.TextDecoder = TextDecoder
    }
  }
}
