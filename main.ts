input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
player = game.createSprite(2, 5)
let sprite = game.createSprite(randint(1, 5), 0)
let _this = game.createSprite(randint(1, 5), 0)
basic.forever(function () {
    sprite.change(LedSpriteProperty.Y, 0.025)
    if (sprite.get(LedSpriteProperty.Y) == 4) {
        if (sprite.isTouching(player)) {
            game.gameOver()
        } else {
            sprite.delete()
            sprite = game.createSprite(randint(1, 5), 0)
        }
    }
})
basic.forever(function () {
    _this.change(LedSpriteProperty.Y, 0.025)
    if (_this.get(LedSpriteProperty.Y) == 4) {
        if (_this.isTouching(player)) {
            game.gameOver()
        } else {
            _this.delete()
            _this = game.createSprite(randint(1, 5), 0)
        }
    }
})
basic.forever(function () {
    basic.pause(5000)
    game.addScore(1)
})
