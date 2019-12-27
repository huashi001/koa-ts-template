import { Context } from 'koa';
class Hello {
  async idg(ctx: Context) {
    ctx.body = {
      status: 1,
      body: 'Home idg'
    }
  }
  async template(ctx: Context) {
    ctx.body = {
      status: 1,
      body: 'Home template'
    }
  }
}

export default new Hello();