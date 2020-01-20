import { Controller, Context } from 'egg';

export default class AdminController extends Controller {
  public async index(ctx: Context) {
    await ctx.render('home.js', { url: ctx.url });
  }
  public async test(ctx: Context) {
    await ctx.render('test.js', { url: ctx.url });
  }
}
