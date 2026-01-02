namespace SpriteKind {
    export const Player2 = SpriteKind.create()
    export const Player3 = SpriteKind.create()
    export const Player4 = SpriteKind.create()
    export const Babosa = SpriteKind.create()
    export const Elementalagua = SpriteKind.create()
    export const Elementalhielo = SpriteKind.create()
    export const ElementalTierra = SpriteKind.create()
    export const Elemental_De_Metal = SpriteKind.create()
    export const Elemental_planta = SpriteKind.create()
    export const Elemental_enerigia = SpriteKind.create()
}
controller.player4.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Pronto.setVelocity(0, -30)
    animation.runImageAnimation(
    Pronto,
    [img`
        ....fffffffffffffffff...
        ...f44444444444444444f..
        ..f4444444444444444444f.
        ..f4444444444444444444f.
        ..f2444444444444444442f.
        ..f2444444444444444442f.
        ..f4444444444444444444f.
        ..fccc4444444444444cccf.
        ..fbbcccccc444ccccccbbf.
        ..fbbbbbbbcccccbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fffffffffffffffffffff.
        ...f11f9f1111111f9f11f..
        ...f99f11f99999f11f99f..
        ...fccf99ff111ff99fccf..
        ...fffffffffffffffffff..
        ......f777766f7766f.....
        ......f777766f7766f.....
        ......fffffffffffff.....
        `,img`
        ....fffffffffffffffff...
        ...f44444444444444444f..
        ..f4444444444444444444f.
        ..f4444444444444444444f.
        ..f2444444444444444442f.
        ..f2444444444444444442f.
        ..f4444444444444444444f.
        ..fccc4444444444444cccf.
        ..fbbcccccc444ccccccbbf.
        ..fbbbbbbbcccccbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fffffffffffffffffffff.
        ...f99f9f1111111f9f11f..
        ...fccf11f99999f11f99f..
        ...ffff99ff111ff99fccf..
        ......ffffffffffffffff..
        ......f667777f6677f.....
        ......f667777f6677f.....
        ......fffffffffffff.....
        `,img`
        ....fffffffffffffffff...
        ...f44444444444444444f..
        ..f4444444444444444444f.
        ..f4444444444444444444f.
        ..f2444444444444444442f.
        ..f2444444444444444442f.
        ..f4444444444444444444f.
        ..fccc4444444444444cccf.
        ..fbbcccccc444ccccccbbf.
        ..fbbbbbbbcccccbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fffffffffffffffffffff.
        ...f11f9f1111111f9f11f..
        ...f99f11f99999f11f99f..
        ...fccf99ff111ff99fccf..
        ...fffffffffffffffffff..
        ......f777766f7766f.....
        ......f777766f7766f.....
        ......fffffffffffff.....
        `,img`
        ....fffffffffffffffff...
        ...f44444444444444444f..
        ..f4444444444444444444f.
        ..f4444444444444444444f.
        ..f2444444444444444442f.
        ..f2444444444444444442f.
        ..f4444444444444444444f.
        ..fccc4444444444444cccf.
        ..fbbcccccc444ccccccbbf.
        ..fbbbbbbbcccccbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fffffffffffffffffffff.
        ...f11f9f1111111f9f99f..
        ...f99f11f99999f11fccf..
        ...fccf99ff111ff99ffff..
        ...ffffffffffffffff.....
        ......f777766f7766f.....
        ......f777766f7766f.....
        ......fffffffffffff.....
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Elementalagua, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (inventario_P1) {
        inventario_P1.push(otherSprite)
    }
})
controller.player4.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    Pronto.setVelocity(0, 0)
    animation.runImageAnimation(
    Pronto,
    [img`
        ....fffffffffffffffff...
        ...f44444444444444444f..
        ..f4444444444444444444f.
        ..f4444444444444444444f.
        ..f2444444444444444442f.
        ..f2444444444444444442f.
        ..f4444444444444444444f.
        ..fccc4444444444444cccf.
        ..fbbcccccc444ccccccbbf.
        ..fbbbbbbbcccccbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fbbbbbbbbbbbbbbbbbbbf.
        ..fffffffffffffffffffff.
        ...f11f9f1111111f9f11f..
        ...f99f11f99999f11f99f..
        ...fccf99ff111ff99fccf..
        ...fffffffffffffffffff..
        ......f777766f7766f.....
        ......f777766f7766f.....
        ......fffffffffffff.....
        `],
    500,
    true
    )
})
function Elemental_de_hielo () {
    Elemental_de_hielo2 = sprites.create(img`
        . . f f . . . . . f f . . 
        . f 6 6 f . . . f 6 6 f . 
        f 6 6 f . . . . . f 6 6 f 
        f 6 6 6 f . . . f 6 6 6 f 
        . f 6 6 6 f f f 6 6 6 f . 
        f 9 f 6 6 6 6 6 6 6 f 9 f 
        . f f 1 6 6 d 6 6 1 f f . 
        . . f 1 1 1 1 1 1 1 f . . 
        . . f 1 9 1 9 1 9 1 f . . 
        . . f 9 9 f f f 9 9 f . . 
        . . . f 9 9 9 9 9 f . . . 
        . . f 1 1 9 9 9 1 1 f . . 
        . . f 1 1 9 1 9 1 1 f . . 
        . . . f 1 9 1 9 1 f . . . 
        . . f 1 1 9 9 9 1 1 f . . 
        . . f f f f f f f f f . . 
        `, SpriteKind.Elementalhielo)
    Elemental_de_hielo2.setPosition(30, 250)
}
controller.player4.onEvent(ControllerEvent.Connected, function () {
    Pronto = sprites.create(img`
        ...fffffffffffffffffff.
        ..f444455555555555555f.
        .f4444455fffffffffff5f.
        .f42244ffbbbbbbbbbbbff.
        .f42244fbbdddddddddddf.
        .f4444ffbbdddddddddddf.
        .fffffbbbddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddffffdddffffdf.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdddddd333dddddf.
        .fbbbbbdddddd333dddddf.
        .fbbbbbddddddddddddddf.
        ffffffffffffffffffffff.
        f1111fccceeeeeeccf11f..
        f9999f9cc11ee11c9f99f..
        fccccf1cc999999c1fccf..
        fffffffffffffffffffff..
        .....f667777f6677f.....
        .....f667777f6677f.....
        .....fffffffffffff.....
        `, SpriteKind.Player4)
    info.player4.setLife(7)
    info.player4.setScore(0)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, Pronto)
})
function CETBP () {
    if (spriteutils.distanceBetween(Pronto, Elemental_de_tierra2) < 5) {
        Elemental_de_tierra2.follow(Pronto, -5)
        Elemental_de_tierra2.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Pronto, Elemental_de_tierra2) > 0) {
        Elemental_de_tierra2.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_de_tierra2.vy < 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d d b c b d d f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d d d b c b d f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d d b c b d d f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d b c b d d d f . . 
                . . f f f f f f f f f . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_tierra2.vy > 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f d f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f d f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_tierra2.vx < 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f f 1 d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f d f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f d f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_tierra2.vx > 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d 1 f f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f d f f f f f f f . . 
                . . . f . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f d f . . 
                . . . . . . . . . f . . . 
                `],
            500,
            true
            )
        }
    }
}
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    game.showLongText(Inventario_P3, DialogLayout.Left)
})
controller.player4.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    Pronto.setVelocity(0, 0)
    animation.runImageAnimation(
    Pronto,
    [img`
        .fffffffffffffffffff...
        .f555555555555554444f..
        .f5fffffffffff5544444f.
        .ffbbbbbbbbbbbff44224f.
        .fdddddddddddbbf44224f.
        .fdddddddddddbbff4444f.
        .fddddddddddddbbbfffff.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fdffffdddffffddbbbbbf.
        .fd11ffdddff11ddbbbbbf.
        .fd11ffdddff11ddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .ffffffffffffffffffffff
        ..f11fcceeeeeecccf1111f
        ..f99f9c11ee11cc9f9999f
        ..fccf1c999999cc1fccccf
        ..fffffffffffffffffffff
        .....f7766f777766f.....
        .....f7766f777766f.....
        .....fffffffffffff.....
        `,img`
        .fffffffffffffffffff...
        .f555555555555554444f..
        .f5fffffffffff5544444f.
        .ffbbbbbbbbbbbff44224f.
        .fdddddddddddbbf44224f.
        .fdddddddddddbbff4444f.
        .fddddddddddddbbbfffff.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fdffffdddffffddbbbbbf.
        .fdbbbbdddbbbbddbbbbbf.
        .fdbbbbdddbbbbddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .ffffffffffffffffffffff
        ..f11fcceeeeeecccf1111f
        ..f99f9c11ee11cc9f9999f
        ..fccf1c999999cc1fccccf
        ..fffffffffffffffffffff
        .....f7766f777766f.....
        .....f7766f777766f.....
        .....fffffffffffff.....
        `,img`
        .fffffffffffffffffff...
        .f555555555555554444f..
        .f5fffffffffff5544444f.
        .ffbbbbbbbbbbbff44224f.
        .fdddddddddddbbf44224f.
        .fdddddddddddbbff4444f.
        .fddddddddddddbbbfffff.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fdffffdddffffddbbbbbf.
        .fd11ffdddff11ddbbbbbf.
        .fd11ffdddff11ddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .ffffffffffffffffffffff
        ..f11fcceeeeeecccf1111f
        ..f99f9c11ee11cc9f9999f
        ..fccf1c999999cc1fccccf
        ..fffffffffffffffffffff
        .....f7766f777766f.....
        .....f7766f777766f.....
        .....fffffffffffff.....
        `],
    500,
    true
    )
})
function Zane_se_detiene_abajo () {
    Kord.setVelocity(0, 0)
    animation.runImageAnimation(
    Kord,
    [img`
        ...........fff.........
        ..........fdddf........
        ..........fdddf........
        .........fdddddf.......
        .........fdddddf.......
        .........fdddddf.......
        ..ffffffffdddddfffffff.
        .ffccccf44ddddd44fcccff
        .fcccccf44ddddd44fccccf
        .fccccccff4ddd4ffcccccf
        .fccccccccfffffcccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fcccfffffffffffffffccf
        .fcff699999999999996fff
        .ff6669dddd999dddd9666f
        .f6666911ff999ff119666f
        .f6666911ff999ff119666f
        .f66669999999999999666f
        .f666699999fff99999666f
        .f66669999999999999666f
        fffffffffffffffffffffff
        f9966fcccbb111b6ccf69f.
        f4cccfaacbb1b6aac6fc4f.
        f9c9cfaacb6b11aac6f9cf.
        ffffffffffffffffffffff.
        .....fbbbbcccfbbbcf....
        .....fbbbbcccfbbbcf....
        .....ffffffffffffff....
        `,img`
        ...........fff.........
        ..........fdddf........
        ..........fdddf........
        .........fdddddf.......
        .........fdddddf.......
        .........fdddddf.......
        ..ffffffffdddddfffffff.
        .ffccccf44ddddd44fcccff
        .fcccccf44ddddd44fccccf
        .fccccccff4ddd4ffcccccf
        .fccccccccfffffcccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fcccfffffffffffffffccf
        .fcff699999999999996fff
        .ff6669dddd999dddd9666f
        .f66669666699966669666f
        .f66669666699966669666f
        .f66669999999999999666f
        .f666699999fff99999666f
        .f66669999999999999666f
        fffffffffffffffffffffff
        f9966fcccbb111b6ccf69f.
        f4cccfaacbb1b6aac6fc4f.
        f9c9cfaacb6b11aac6f9cf.
        ffffffffffffffffffffff.
        .....fbbbbcccfbbbcf....
        .....fbbbbcccfbbbcf....
        .....ffffffffffffff....
        `,img`
        ...........fff.........
        ..........fdddf........
        ..........fdddf........
        .........fdddddf.......
        .........fdddddf.......
        .........fdddddf.......
        ..ffffffffdddddfffffff.
        .ffccccf44ddddd44fcccff
        .fcccccf44ddddd44fccccf
        .fccccccff4ddd4ffcccccf
        .fccccccccfffffcccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fcccfffffffffffffffccf
        .fcff699999999999996fff
        .ff6669dddd999dddd9666f
        .f6666911ff999ff119666f
        .f6666911ff999ff119666f
        .f66669999999999999666f
        .f666699999fff99999666f
        .f66669999999999999666f
        fffffffffffffffffffffff
        f9966fcccbb111b6ccf69f.
        f4cccfaacbb1b6aac6fc4f.
        f9c9cfaacb6b11aac6f9cf.
        ffffffffffffffffffffff.
        .....fbbbbcccfbbbcf....
        .....fbbbbcccfbbbcf....
        .....ffffffffffffff....
        `],
    500,
    true
    )
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    game.showLongText(Inventario_p2, DialogLayout.Right)
})
function CEAB () {
    CEABE()
    CEABT()
    CEABK()
    CEABP()
}
function TDD () {
    Trixie.setVelocity(0, 0)
    animation.runImageAnimation(
    Trixie,
    [img`
        .fffffffffffffffffffffffffffff.
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444ff4444f3e44f
        f44e3feeee44fff444fddf444f3e44f
        .f4e3feeee44fddf44fdddf44f3e4f.
        ..ffffeeeeffddddf4fddddf4ffff..
        .....feeefdddddddffddddf4f.....
        .....feeefddd4444ddd4444ff.....
        .....ffefbddd1177ddd7711df.....
        .....fbfbbddd117fdddf711df.....
        .....fbbbbdddddddddddddddf.....
        .....fbbbbdddddddfffdddddf.....
        .....fbbbbdddddddddddddddf.....
        .....fffffffffffffffffffff.....
        .....fd7df6677ccc77c4f7df......
        .....f776f667777777ccf77f......
        .....fd76fccbbbbbbbbbf7df......
        .....ffffffffffffffffffff......
        .........fbbbbccfbbccf.........
        .........fbbbbccfbbccf.........
        .........fffffffffffff.........
        `,img`
        .fffffffffffffffffffffffffffff.
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444ff4444f3e44f
        f44e3feeee44fff444fddf444f3e44f
        .f4e3feeee44fddf44fdddf44f3e4f.
        ..ffffeeeeffddddf4fddddf4ffff..
        .....feeefdddddddffddddf4f.....
        .....feeefddd4444ddd4444ff.....
        .....ffefbdddbbbbdddbbbbdf.....
        .....fbfbbdddbbbbdddbbbbdf.....
        .....fbbbbdddddddddddddddf.....
        .....fbbbbdddddddfffdddddf.....
        .....fbbbbdddddddddddddddf.....
        .....fffffffffffffffffffff.....
        .....fd7df6677ccc77c4f7df......
        .....f776f667777777ccf77f......
        .....fd76fccbbbbbbbbbf7df......
        .....ffffffffffffffffffff......
        .........fbbbbccfbbccf.........
        .........fbbbbccfbbccf.........
        .........fffffffffffff.........
        `,img`
        .fffffffffffffffffffffffffffff.
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444ff4444f3e44f
        f44e3feeee44fff444fddf444f3e44f
        .f4e3feeee44fddf44fdddf44f3e4f.
        ..ffffeeeeffddddf4fddddf4ffff..
        .....feeefdddddddffddddf4f.....
        .....feeefddd4444ddd4444ff.....
        .....ffefbddd1177ddd7711df.....
        .....fbfbbddd117fdddf711df.....
        .....fbbbbdddddddddddddddf.....
        .....fbbbbdddddddfffdddddf.....
        .....fbbbbdddddddddddddddf.....
        .....fffffffffffffffffffff.....
        .....fd7df6677ccc77c4f7df......
        .....f776f667777777ccf77f......
        .....fd76fccbbbbbbbbbf7df......
        .....ffffffffffffffffffff......
        .........fbbbbccfbbccf.........
        .........fbbbbccfbbccf.........
        .........fffffffffffff.........
        `],
    500,
    true
    )
}
function ECI () {
    Eli_Shane.setVelocity(-50, 0)
    animation.runImageAnimation(
    Eli_Shane,
    [img`
        .fffffffffffffffffff....
        .fccccccccccccccccccf...
        .fcccccccccccccccccccf..
        .fcccccccccccccccccccf..
        .fcccccccccccccfccccccf.
        .ffccfccccccccccfcccccf.
        .fdffdfccccccccccfccccf.
        .fdfdddfccccccccccfcccf.
        .fddddddfffffffffffccff.
        .fddddddddddddddefcccf..
        .fdffffdddffffddeffccf..
        .fd11ffdddff11ddeefccf..
        .fd11ffdddff11ddeeffcf..
        .fddddddddddddddeeefff..
        .fdddddfffddddddeeeeff..
        .fddddddddddddddeeeeef..
        .fffffffffffffffffffff..
        ..fedfcccccbb66ccfeedf..
        ..fccf11ccb6ccc11fcccf..
        ..fcdf44b6ccccc44fcdcf..
        ..ffffffffffffffffffff..
        .....fbbccfbbbbccf......
        .....fbbccfbbbbccf......
        .....fffffffffffff......
        `,img`
        .fffffffffffffffffff....
        .fccccccccccccccccccf...
        .fcccccccccccccccccccf..
        .fcccccccccccccccccccf..
        .fcccccccccccccfccccccf.
        .ffccfccccccccccfcccccf.
        .fdffdfccccccccccfccccf.
        .fdfdddfccccccccccfcccf.
        .fddddddfffffffffffccff.
        .fddddddddddddddefcccf..
        .fdffffdddffffddeffccf..
        .fd11ffdddff11ddeefccf..
        .fd11ffdddff11ddeeffcf..
        .fddddddddddddddeeefff..
        .fdddddfffddddddeeeeff..
        .fddddddddddddddeeeeef..
        .fffffffffffffffffffff..
        ..fccfcccccbb66ccfeedf..
        ..fcdf11ccb6ccc11fcccf..
        ..ffff44b6ccccc44fcdcf..
        .....fffffffffffffffff..
        .....fccbbfccbbbbf......
        .....fccbbfccbbbbf......
        .....fffffffffffff......
        `,img`
        .fffffffffffffffffff....
        .fccccccccccccccccccf...
        .fcccccccccccccccccccf..
        .fcccccccccccccccccccf..
        .fcccccccccccccfccccccf.
        .ffccfccccccccccfcccccf.
        .fdffdfccccccccccfccccf.
        .fdfdddfccccccccccfcccf.
        .fddddddfffffffffffccff.
        .fddddddddddddddefcccf..
        .fdffffdddffffddeffccf..
        .fd11ffdddff11ddeefccf..
        .fd11ffdddff11ddeeffcf..
        .fddddddddddddddeeefff..
        .fdddddfffddddddeeeeff..
        .fddddddddddddddeeeeef..
        .fffffffffffffffffffff..
        ..fedfcccccbb66ccfcccf..
        ..fccf11ccb6ccc11fcdcf..
        ..fcdf44b6ccccc44fffff..
        ..ffffffffffffffff......
        .....fbbccfbbbbccf......
        .....fbbccfbbbbccf......
        .....fffffffffffff......
        `],
    100,
    true
    )
}
controller.player3.onEvent(ControllerEvent.Disconnected, function () {
    Zane2()
})
controller.player4.onEvent(ControllerEvent.Disconnected, function () {
    Pronto3()
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    game.showLongText(Inventario_p4, DialogLayout.Right)
})
function CEPBT () {
    if (spriteutils.distanceBetween(Trixie, Elemental_planta) < 2) {
        Elemental_planta.follow(Trixie, -5)
        Elemental_planta.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Trixie, Elemental_planta) > 0) {
        Elemental_planta.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_planta.vy < 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 7 9 1 9 7 7 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 7 7 9 1 9 7 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 7 9 1 9 7 7 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 9 1 9 7 7 7 f . 
                . f f f f f f f f f . 
                `],
            500,
            true
            )
        } else if (Elemental_planta.vy > 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f 7 f . 
                . . . . . . . . f . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_planta.vx < 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f f 1 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 f f f f f f f . 
                . . f . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f 7 f . 
                . . . . . . . . f . . 
                `],
            500,
            true
            )
        } else if (Elemental_planta.vx > 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 1 f f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f 7 f . 
                . . . . . . . . f . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        }
    }
}
function CEHB () {
    CEHBE()
    CEHBT()
    CEHBK()
    CEHBP()
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    EDI()
})
controller.player3.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    Zane_se_detiene_arriba()
})
sprites.onOverlap(SpriteKind.Player3, SpriteKind.Elementalhielo, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_P3) {
        Inventario_P3.push(otherSprite)
    }
})
function CEHBE () {
    if (spriteutils.distanceBetween(Eli_Shane, Elemental_de_hielo2) < 2) {
        Elemental_de_hielo2.follow(Eli_Shane, -5)
        Elemental_de_hielo2.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Eli_Shane, Elemental_de_hielo2) > 0) {
        Elemental_de_hielo2.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_de_hielo2.vy < 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 1 9 6 9 1 1 f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 1 1 9 6 9 1 f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 1 9 6 9 1 1 f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 9 6 9 1 1 1 f . . 
                . . f f f f f f f f f . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_hielo2.vy > 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f 1 f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_hielo2.vx < 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f 1 f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_hielo2.vx > 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 f f f f f f f . . 
                . . . f . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f 1 f . . 
                . . . . . . . . . f . . . 
                `],
            500,
            true
            )
        }
    }
}
function ElementalMetal2 () {
    ElementalMetal = sprites.create(img`
        . f . . . . . . . f . 
        f d f . . f . . f d f 
        f d d f f b f f d d f 
        f d d d f b f d d d f 
        . f d b d b d b d f . 
        . f d b d b d b d f . 
        . f d d d b d d d f . 
        . f 1 f d d d f 1 f . 
        . f d b f f f b d f . 
        . . f d b b b d f . . 
        . f d d b b b d d f . 
        . f d d b b b d d f . 
        . . f d b b b d f . . 
        . f d b b b b b d f . 
        . f f f f f f f f f . 
        `, SpriteKind.Elemental_De_Metal)
    ElementalMetal.setPosition(10, 10)
}
function Zane_camina_hacia_abajo () {
    Kord.setVelocity(0, 80)
    animation.runImageAnimation(
    Kord,
    [img`
        ...............fff.....
        ...............fddf....
        ...............fdddf...
        ...............fddddf..
        ...............fddddf..
        ...............fddddf..
        ..ffffffffffffffddddfff
        .ffccccf4444444fddddfcf
        .fcccccf444444fdddddfcf
        .fccccccff444fdddddfccf
        .fccccccccfffffffffcccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccffffffffffffccf
        .fccccff699999999999fcf
        .fcccf6669dddd999ddddff
        .ffff6666911ff999ff119f
        .f6666666911ff999ff119f
        .f66666669999999999999f
        .f666666699999fff99999f
        .f66666669999999999999f
        fffffffffffffffffffffff
        f9966fcccbb111b6ccf69f.
        f4cccfaacbb1b6aac6fc4f.
        f9c9cfaacb6b11aac6f9cf.
        ffffffffffffffffffffff.
        .....fcccbbbbfcbbbf....
        .....fcccbbbbfcbbbf....
        .....ffffffffffffff....
        `,img`
        ...........fff.........
        ..........fdddf........
        ..........fdddf........
        .........fdddddf.......
        .........fdddddf.......
        .........fdddddf.......
        ..ffffffffdddddfffffff.
        .ffccccf44ddddd44fcccff
        .fcccccf44ddddd44fccccf
        .fccccccff4ddd4ffcccccf
        .fccccccccfffffcccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fcccfffffffffffffffccf
        .fcff699999999999996fff
        .ff6669dddd999dddd9666f
        .f6666911ff999ff119666f
        .f6666911ff999ff119666f
        .f66669999999999999666f
        .f666699999fff99999666f
        .f66669999999999999666f
        fffffffffffffffffffffff
        f9966fcccbb111b6ccf69f.
        f4cccfaacbb1b6aac6fc4f.
        f9c9cfaacb6b11aac6f9cf.
        ffffffffffffffffffffff.
        .....fbbbbcccfbbbcf....
        .....fbbbbcccfbbbcf....
        .....ffffffffffffff....
        `,img`
        .....fff...............
        ....fddf...............
        ...fdddf...............
        ..fddddf...............
        ..fddddf...............
        ..fddddf...............
        fffddddffffffffffffff..
        fcfddddf4444444fccccff.
        fcfdddddf444444fcccccf.
        fccfdddddf444ffccccccf.
        fcccfffffffffccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccffffffffffffccccccf.
        fcf999999999996ffccccf.
        ffdddd999dddd9666fcccf.
        f911ff999ff1196666ffff.
        f911ff999ff1196666666f.
        f99999999999996666666f.
        f99999fff999996666666f.
        f99999999999996666666f.
        fffffffffffffffffffffff
        .f96fcccbb111b6ccf6699f
        .f4cfaacbb1b6aac6fccc4f
        .fc9faacb6b11aac6fc9c9f
        .ffffffffffffffffffffff
        ....fbbbcfbbbbcccf.....
        ....fbbbcfbbbbcccf.....
        ....ffffffffffffff.....
        `],
    100,
    true
    )
}
function CEPBE () {
    if (spriteutils.distanceBetween(Eli_Shane, Elemental_planta) < 2) {
        Elemental_planta.follow(Eli_Shane, -5)
        Elemental_planta.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Eli_Shane, Elemental_planta) > 0) {
        Elemental_planta.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_planta.vy < 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 7 9 1 9 7 7 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 7 7 9 1 9 7 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 7 9 1 9 7 7 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 9 1 9 7 7 7 f . 
                . f f f f f f f f f . 
                `],
            500,
            true
            )
        } else if (Elemental_planta.vy > 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f 7 f . 
                . . . . . . . . f . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_planta.vx < 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f f 1 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 f f f f f f f . 
                . . f . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f 7 f . 
                . . . . . . . . f . . 
                `],
            500,
            true
            )
        } else if (Elemental_planta.vx > 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 1 f f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f 7 f . 
                . . . . . . . . f . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        }
    }
}
controller.player3.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    Zane_se_detiene_abajo()
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Elementalhielo, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_p2) {
        Inventario_p2.push(otherSprite)
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    ECA()
})
function CEMBT () {
    if (spriteutils.distanceBetween(Trixie, ElementalMetal) < 2) {
        ElementalMetal.follow(Trixie, -5)
        ElementalMetal.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Trixie, ElementalMetal) > 0) {
        ElementalMetal.setVelocity(randint(-10, 10), randint(-10, 10))
        if (ElementalMetal.vy < 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d d c b c d d f . 
                . f f f f f f f f f . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d d d c b c d f . 
                . f f f f f f f f f . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d d c b c d d f . 
                . f f f f f f f f f . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d c b c d d d f . 
                . f f f f f f f f f . 
                `],
            500,
            true
            )
        } else if (ElementalMetal.vy > 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f d f . 
                . . . . . . . . f . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f d f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        } else if (ElementalMetal.vx < 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f f 1 d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f d f . 
                . . . . . . . . f . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f d f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        } else if (ElementalMetal.vx > 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d 1 f f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f d f . 
                . . . . . . . . f . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f d f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        }
    }
}
controller.player1.onEvent(ControllerEvent.Disconnected, function () {
    Eli_2()
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    EDA()
})
sprites.onOverlap(SpriteKind.Player3, SpriteKind.Elementalagua, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_P3) {
        Inventario_P3.push(otherSprite)
    }
})
controller.player4.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    Pronto.setVelocity(0, 0)
    animation.runImageAnimation(
    Pronto,
    [img`
        ...fffffffffffffffffff.
        ..f445555555555555444f.
        .f44455fffffffff55444f.
        .f244ffbbbbbbbbbff442f.
        .f244fbbdddddddbbf442f.
        .f44ffbbdddddddbbff44f.
        .fffbbbdddddddddbbbfff.
        .fbbbdddddddddddddbbbf.
        .fbbdddddddddddddddbbf.
        .fbbdddddddddddddddbbf.
        .fbbddffffdddffffddbbf.
        .fbbdd11ffdddff11ddbbf.
        .fbbdd11ffdddff11ddbbf.
        .fbbdddddd333ddddddbbf.
        .fbbdddddd333ddddddbbf.
        .fbbdddddddddddddddbbf.
        .fffffffffffffffffffff.
        ..f11fcceeeeeecccf11f..
        ..f99f9c11ee11cc9f99f..
        ..fccf1c999999cc1fccf..
        ..fffffffffffffffffff..
        .....f6677f667777f.....
        .....f6677f667777f.....
        .....fffffffffffff.....
        `,img`
        ...fffffffffffffffffff.
        ..f445555555555555444f.
        .f44455fffffffff55444f.
        .f244ffbbbbbbbbbff442f.
        .f244fbbdddddddbbf442f.
        .f44ffbbdddddddbbff44f.
        .fffbbbdddddddddbbbfff.
        .fbbbdddddddddddddbbbf.
        .fbbdddddddddddddddbbf.
        .fbbdddddddddddddddbbf.
        .fbbddffffdddffffddbbf.
        .fbbddbbbbdddbbbbddbbf.
        .fbbddbbbbdddbbbbddbbf.
        .fbbdddddd333ddddddbbf.
        .fbbdddddd333ddddddbbf.
        .fbbdddddddddddddddbbf.
        .fffffffffffffffffffff.
        ..f11fcceeeeeecccf11f..
        ..f99f9c11ee11cc9f99f..
        ..fccf1c999999cc1fccf..
        ..fffffffffffffffffff..
        .....f6677f667777f.....
        .....f6677f667777f.....
        .....fffffffffffff.....
        `,img`
        ...fffffffffffffffffff.
        ..f445555555555555444f.
        .f44455fffffffff55444f.
        .f244ffbbbbbbbbbff442f.
        .f244fbbdddddddbbf442f.
        .f44ffbbdddddddbbff44f.
        .fffbbbdddddddddbbbfff.
        .fbbbdddddddddddddbbbf.
        .fbbdddddddddddddddbbf.
        .fbbdddddddddddddddbbf.
        .fbbddffffdddffffddbbf.
        .fbbdd11ffdddff11ddbbf.
        .fbbdd11ffdddff11ddbbf.
        .fbbdddddd333ddddddbbf.
        .fbbdddddd333ddddddbbf.
        .fbbdddddddddddddddbbf.
        .fffffffffffffffffffff.
        ..f11fcceeeeeecccf11f..
        ..f99f9c11ee11cc9f99f..
        ..fccf1c999999cc1fccf..
        ..fffffffffffffffffff..
        .....f6677f667777f.....
        .....f6677f667777f.....
        .....fffffffffffff.....
        `],
    500,
    true
    )
})
function Zane_camina_se_detiene_en_la_izquierda () {
    Kord.setVelocity(0, 0)
    animation.runImageAnimation(
    Kord,
    [img`
        .....fff...............
        ....fddf...............
        ...fdddf...............
        ..fddddf...............
        ..fddddf...............
        ..fddddf...............
        fffddddffffffffffffff..
        fcfddddf4444444fccccff.
        fcfdddddf444444fcccccf.
        fccfdddddf444ffccccccf.
        fcccfffffffffccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccffffffffffffccccccf.
        fcf999999999996ffccccf.
        ffdddd999dddd9666fcccf.
        f911ff999ff1196666ffff.
        f911ff999ff1196666666f.
        f99999999999996666666f.
        f99999fff999996666666f.
        f99999999999996666666f.
        fffffffffffffffffffffff
        .f96fcccbb111b6ccf6699f
        .f4cfaacbb1b6aac6fccc4f
        .fc9faacb6b11aac6fc9c9f
        .ffffffffffffffffffffff
        ....fcbbbfcccbbbbf.....
        ....fcbbbfcccbbbbf.....
        ....ffffffffffffff.....
        `,img`
        .....fff...............
        ....fddf...............
        ...fdddf...............
        ..fddddf...............
        ..fddddf...............
        ..fddddf...............
        fffddddffffffffffffff..
        fcfddddf4444444fccccff.
        fcfdddddf444444fcccccf.
        fccfdddddf444ffccccccf.
        fcccfffffffffccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccffffffffffffccccccf.
        fcf999999999996ffccccf.
        ffdddd999dddd9666fcccf.
        f96666999666696666ffff.
        f96666999666696666666f.
        f99999999999996666666f.
        f99999fff999996666666f.
        f99999999999996666666f.
        fffffffffffffffffffffff
        .f96fcccbb111b6ccf6699f
        .f4cfaacbb1b6aac6fccc4f
        .fc9faacb6b11aac6fc9c9f
        .ffffffffffffffffffffff
        ....fcbbbfcccbbbbf.....
        ....fcbbbfcccbbbbf.....
        ....ffffffffffffff.....
        `,img`
        .....fff...............
        ....fddf...............
        ...fdddf...............
        ..fddddf...............
        ..fddddf...............
        ..fddddf...............
        fffddddffffffffffffff..
        fcfddddf4444444fccccff.
        fcfdddddf444444fcccccf.
        fccfdddddf444ffccccccf.
        fcccfffffffffccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccffffffffffffccccccf.
        fcf999999999996ffccccf.
        ffdddd999dddd9666fcccf.
        f911ff999ff1196666ffff.
        f911ff999ff1196666666f.
        f99999999999996666666f.
        f99999fff999996666666f.
        f99999999999996666666f.
        fffffffffffffffffffffff
        .f96fcccbb111b6ccf6699f
        .f4cfaacbb1b6aac6fccc4f
        .fc9faacb6b11aac6fc9c9f
        .ffffffffffffffffffffff
        ....fcbbbfcccbbbbf.....
        ....fcbbbfcccbbbbf.....
        ....ffffffffffffff.....
        `],
    500,
    true
    )
}
function Eli () {
    Eli_Shane = sprites.create(img`
        ...fffffffffffffffffff.
        ..fcccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        fccccfffccccccccccccccf
        fccccfefccfcccccccccccf
        fcccffedffdfccccccccccf
        fcccffedfdddfcccccccccf
        ffccffeddddddffffffffff
        .fcccfeddddddddddddddf.
        .fccffeddffffdddffffdf.
        .fccfeedd11ffdddff11df.
        .fcffeedd11ffdddff11df.
        .fffeeeddddddddddddddf.
        .ffeeeeddddddfffdddddf.
        .feeeeeddddddddddddddf.
        ffffffffffffffffffffff.
        fddeefcccccbb66ccfdef..
        fccccf11ccb6ccc11fccf..
        fdcdcf44b6ccccc44fdcf..
        fffffffffffffffffffff..
        .....fbbbbccfbbccf.....
        .....fbbbbccfbbccf.....
        .....fffffffffffff.....
        `, SpriteKind.Player)
    info.player1.setScore(0)
    info.player1.setLife(5)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, Eli_Shane)
}
function ECA () {
    Eli_Shane.setVelocity(0, -50)
    animation.runImageAnimation(
    Eli_Shane,
    [img`
        ....fffffffffffffffff...
        ...fcccccccccccccccccf..
        ..fcccccccccccccccccccf.
        ..fcccccccccccccccccccff
        .fcccccccccccccccccccccf
        ffcccccccccccccccccccccf
        ffcccccccccccccccccccccf
        ffcccccccccccccccccccccf
        fffcccccccccccccccccccff
        .ffcccccccccccccccccccf.
        ..fcccccccccccccccccccf.
        ..fcccccccccccccccccccf.
        ..fffcccccccccccccccfff.
        ..feefcccccccccccccfeef.
        ..fddefffffffffffffeddf.
        ..fdddeeeeeeeeeeeeedddf.
        .ffffffffffffffffffffff.
        .fddeefccf4eee4fccfdef..
        .fccccf11f44444f11fccf..
        .fdcdcf44f44444f46fdcf..
        .fffffffffffffffffffff..
        ......fccbbbbfccbbf.....
        ......fccbbbbfccbbf.....
        ......fffffffffffff.....
        `,img`
        ...fffffffffffffffff....
        ..fcccccccccccccccccf...
        .fcccccccccccccccccccf..
        ffcccccccccccccccccccf..
        fcccccccccccccccccccccf.
        fcccccccccccccccccccccf.
        fcccccccccccccccccccccf.
        fcccccccccccccccccccccf.
        ffcccccccccccccccccccff.
        .fcccccccccccccccccccf..
        .fcccccccccccccccccccf..
        .fcccccccccccccccccccf..
        .fffcccccccccccccccfff..
        .feefcccccccccccccfeef..
        .fddefffffffffffffeddf..
        .fdddeeeeeeeeeeeeedddf..
        .ffffffffffffffffffffff.
        ..fedfccf4eee4fccfeeddf.
        ..fccf11f44444f11fccccf.
        ..fcdf44f44444f46fcdcdf.
        ..fffffffffffffffffffff.
        .....fbbccfbbbbccf......
        .....fbbccfbbbbccf......
        .....fffffffffffff......
        `,img`
        ....fffffffffffffffff...
        ...fcccccccccccccccccf..
        ..fcccccccccccccccccccf.
        ..fcccccccccccccccccccff
        .fcccccccccccccccccccccf
        ffcccccccccccccccccccccf
        ffcccccccccccccccccccccf
        ffcccccccccccccccccccccf
        fffcccccccccccccccccccff
        .ffcccccccccccccccccccf.
        ..fcccccccccccccccccccf.
        ..fcccccccccccccccccccf.
        ..fffcccccccccccccccfff.
        ..feefcccccccccccccfeef.
        ..fddefffffffffffffeddf.
        ..fdddeeeeeeeeeeeeedddf.
        .ffffffffffffffffffffff.
        .fddeefccf4eee4fccfdef..
        .fccccf11f44444f11fccf..
        .fdcdcf44f44444f46fdcf..
        .fffffffffffffffffffff..
        ......fccbbbbfccbbf.....
        ......fccbbbbfccbbf.....
        ......fffffffffffff.....
        `],
    200,
    true
    )
}
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    TCA()
})
function Trxie () {
    Trixie = sprites.create(img`
        .fffffffffffffffffffffffffffff.
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444ff4444f3e44f
        f44e3feeee44fff444fddf444f3e44f
        .f4e3feeee44fddf44fdddf44f3e4f.
        ..ffffeeeeffddddf4fddddf4ffff..
        .....feeefdddddddffddddf4f.....
        .....feeefddd4444ddd4444ff.....
        .....ffefbddd1177ddd7711df.....
        .....fbfbbddd117fdddf711df.....
        .....fbbbbdddddddddddddddf.....
        .....fbbbbdddddddfffdddddf.....
        .....fbbbbdddddddddddddddf.....
        .....fffffffffffffffffffff.....
        .....f776f66777ccc7c4f7df......
        .....fd76f667777777ccf77f......
        .....fffffccbbbbbbbbbf7df......
        .........ffffffffffffffff......
        .........fccbbbbfccbbf.........
        .........fccbbbbfccbbf.........
        `, SpriteKind.Player2)
    info.player2.setScore(0)
    info.player2.setLife(5)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, Trixie)
}
function CEMB () {
    CEMBE()
    CEMBT()
    CEMBK()
    CEMBP()
}
controller.player3.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    Zane_se_detiene_en_la_derecha()
})
controller.player4.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Pronto.setVelocity(0, 30)
    animation.runImageAnimation(
    Pronto,
    [img`
        ...fffffffffffffffffff.
        ..f444455555555555555f.
        .f4444455fffffffffff5f.
        .f42244ffbbbbbbbbbbbff.
        .f42244fbbdddddddddddf.
        .f4444ffbbdddddddddddf.
        .fffffbbbddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddffffdddffffdf.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdddddd333dddddf.
        .fbbbbbdddddd333dddddf.
        .fbbbbbddddddddddddddf.
        ffffffffffffffffffffff.
        f1111fccceeeeeeccf11f..
        f9999f9cc11ee11c9f99f..
        fccccf1cc999999c1fccf..
        fffffffffffffffffffff..
        .....f667777f6677f.....
        .....f667777f6677f.....
        .....fffffffffffff.....
        `,img`
        ...fffffffffffffffffff.
        ..f445555555555555444f.
        .f44455fffffffff55444f.
        .f244ffbbbbbbbbbff442f.
        .f244fbbdddddddbbf442f.
        .f44ffbbdddddddbbff44f.
        .fffbbbdddddddddbbbfff.
        .fbbbdddddddddddddbbbf.
        .fbbdddddddddddddddbbf.
        .fbbdddddddddddddddbbf.
        .fbbddffffdddffffddbbf.
        .fbbdd11ffdddff11ddbbf.
        .fbbdd11ffdddff11ddbbf.
        .fbbdddddd333ddddddbbf.
        .fbbdddddd333ddddddbbf.
        .fbbdddddddddddddddbbf.
        .ffffffffffffffffffffff
        ..f11fcceeeeeecccf1111f
        ..f99f9c11ee11cc9f9999f
        ..fccf1c999999cc1fccccf
        ..fffffffffffffffffffff
        .....f6677f667777f.....
        .....f6677f667777f.....
        .....fffffffffffff.....
        `,img`
        .fffffffffffffffffff...
        .f555555555555554444f..
        .f5fffffffffff5544444f.
        .ffbbbbbbbbbbbff44224f.
        .fdddddddddddbbf44224f.
        .fdddddddddddbbff4444f.
        .fddddddddddddbbbfffff.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fdffffdddffffddbbbbbf.
        .fd11ffdddff11ddbbbbbf.
        .fd11ffdddff11ddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        ffffffffffffffffffffff.
        f1111fccceeeeeeccf11f..
        f9999f9cc11ee11c9f99f..
        fccccf1cc999999c1fccf..
        fffffffffffffffffffff..
        .....f667777f6677f.....
        .....f667777f6677f.....
        .....fffffffffffff.....
        `,img`
        ...fffffffffffffffffff.
        ..f445555555555555444f.
        .f44455fffffffff55444f.
        .f244ffbbbbbbbbbff442f.
        .f244fbbdddddddbbf442f.
        .f44ffbbdddddddbbff44f.
        .fffbbbdddddddddbbbfff.
        .fbbbdddddddddddddbbbf.
        .fbbdddddddddddddddbbf.
        .fbbdddddddddddddddbbf.
        .fbbddffffdddffffddbbf.
        .fbbdd11ffdddff11ddbbf.
        .fbbdd11ffdddff11ddbbf.
        .fbbdddddd333ddddddbbf.
        .fbbdddddd333ddddddbbf.
        .fbbdddddddddddddddbbf.
        .ffffffffffffffffffffff
        ..f11fcceeeeeecccf1111f
        ..f99f9c11ee11cc9f9999f
        ..fccf1c999999cc1fccccf
        ..fffffffffffffffffffff
        .....f6677f667777f.....
        .....f6677f667777f.....
        .....fffffffffffff.....
        `],
    500,
    true
    )
})
function ElementalPlanta () {
    Elemental_planta = sprites.create(img`
        . . . . . f . . . . . 
        . . . . f 7 f . . . . 
        . . . . f 7 f . . . . 
        . . . . f 3 f . . . . 
        . . . f 3 5 3 f . . . 
        . . . . f 3 f . . . . 
        . f f . f 7 f . f f . 
        . f 3 f 3 3 3 f 3 f . 
        . f 3 3 3 3 3 3 3 f . 
        f 3 3 3 3 3 3 3 3 3 f 
        . f 3 3 3 3 3 3 3 f . 
        . f 1 f 9 3 9 f 1 f . 
        . f 9 9 f f f 9 9 f . 
        . . f 9 9 9 9 9 f . . 
        . f 7 7 9 9 9 7 7 f . 
        . f 7 9 1 1 1 9 7 f . 
        . . f 7 9 1 9 7 f . . 
        . f 7 7 9 9 9 7 7 f . 
        . f f f f f f f f f . 
        `, SpriteKind.Elemental_planta)
    Elemental_planta.setPosition(150, 10)
}
sprites.onOverlap(SpriteKind.Player2, SpriteKind.ElementalTierra, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_p2) {
        Inventario_p2.push(otherSprite)
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    Tdi()
})
function Zane_camina_a_la_izquierda () {
    Kord.setVelocity(-80, 0)
    animation.runImageAnimation(
    Kord,
    [img`
        .....fff...............
        ....fddf...............
        ...fdddf...............
        ..fddddf...............
        ..fddddf...............
        ..fddddf...............
        fffddddffffffffffffff..
        fcfddddf4444444fccccff.
        fcfdddddf444444fcccccf.
        fccfdddddf444ffccccccf.
        fcccfffffffffccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccffffffffffffccccccf.
        fcf999999999996ffccccf.
        ffdddd999dddd9666fcccf.
        f911ff999ff1196666ffff.
        f911ff999ff1196666666f.
        f99999999999996666666f.
        f99999fff999996666666f.
        f99999999999996666666f.
        fffffffffffffffffffffff
        .f96fcccbb111b6ccfccc4f
        .f4cfaacbb1b6aac6fc9c9f
        .fc9faacb6b11aac6ffffff
        .fffffffffffffffff.....
        ....fbbbcfbbbbcccf.....
        ....fbbbcfbbbbcccf.....
        ....ffffffffffffff.....
        `,img`
        .....fff...............
        ....fddf...............
        ...fdddf...............
        ..fddddf...............
        ..fddddf...............
        ..fddddf...............
        fffddddffffffffffffff..
        fcfddddf4444444fccccff.
        fcfdddddf444444fcccccf.
        fccfdddddf444ffccccccf.
        fcccfffffffffccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccffffffffffffccccccf.
        fcf999999999996ffccccf.
        ffdddd999dddd9666fcccf.
        f911ff999ff1196666ffff.
        f911ff999ff1196666666f.
        f99999999999996666666f.
        f99999fff999996666666f.
        f99999999999996666666f.
        fffffffffffffffffffffff
        .f96fcccbb111b6ccf6699f
        .f4cfaacbb1b6aac6fccc4f
        .fc9faacb6b11aac6fc9c9f
        .ffffffffffffffffffffff
        ....fcbbbfcccbbbbf.....
        ....fcbbbfcccbbbbf.....
        ....ffffffffffffff.....
        `,img`
        .....fff...............
        ....fddf...............
        ...fdddf...............
        ..fddddf...............
        ..fddddf...............
        ..fddddf...............
        fffddddffffffffffffff..
        fcfddddf4444444fccccff.
        fcfdddddf444444fcccccf.
        fccfdddddf444ffccccccf.
        fcccfffffffffccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccffffffffffffccccccf.
        fcf999999999996ffccccf.
        ffdddd999dddd9666fcccf.
        f911ff999ff1196666ffff.
        f911ff999ff1196666666f.
        f99999999999996666666f.
        f99999fff999996666666f.
        f99999999999996666666f.
        fffffffffffffffffffffff
        .f4cfcccbb111b6ccf6699f
        .fc9faacbb1b6aac6fccc4f
        .ffffaacb6b11aac6fc9c9f
        ....fffffffffffffffffff
        ....fbbbcfbbbbcccf.....
        ....fbbbcfbbbbcccf.....
        ....ffffffffffffff.....
        `],
    100,
    true
    )
}
sprites.onOverlap(SpriteKind.Player4, SpriteKind.ElementalTierra, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_p4) {
        Inventario_p4.push(otherSprite)
    }
})
function CETBE () {
    if (spriteutils.distanceBetween(Eli_Shane, Elemental_de_tierra2) < 2) {
        Elemental_de_tierra2.follow(Eli_Shane, -5)
        Elemental_de_tierra2.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Eli_Shane, Elemental_de_tierra2) > 0) {
        Elemental_de_tierra2.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_de_tierra2.vy < 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d d b c b d d f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d d d b c b d f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d d b c b d d f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d b c b d d d f . . 
                . . f f f f f f f f f . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_tierra2.vy > 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f d f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f d f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_tierra2.vx < 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f f 1 d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f d f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f d f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_tierra2.vx > 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d 1 f f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f d f f f f f f f . . 
                . . . f . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f d f . . 
                . . . . . . . . . f . . . 
                `],
            500,
            true
            )
        }
    }
}
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    Tdab()
})
function Zane_camina_a_la_derecha () {
    Kord.setVelocity(80, 0)
    animation.runImageAnimation(
    Kord,
    [img`
        ...............fff.....
        ...............fddf....
        ...............fdddf...
        ...............fddddf..
        ...............fddddf..
        ...............fddddf..
        ..ffffffffffffffddddfff
        .ffccccf4444444fddddfcf
        .fcccccf444444fdddddfcf
        .fccccccff444fdddddfccf
        .fccccccccfffffffffcccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccffffffffffffccf
        .fccccff699999999999fcf
        .fcccf6669dddd999ddddff
        .ffff6666911ff999ff119f
        .f6666666911ff999ff119f
        .f66666669999999999999f
        .f666666699999fff99999f
        .f66666669999999999999f
        fffffffffffffffffffffff
        f4cccfcccbb111b6ccf69f.
        f9c9cfaacbb1b6aac6fc4f.
        ffffffaacb6b11aac6f9cf.
        .....fffffffffffffffff.
        .....fcccbbbbfcbbbf....
        .....fcccbbbbfcbbbf....
        .....ffffffffffffff....
        `,img`
        ...............fff.....
        ...............fddf....
        ...............fdddf...
        ...............fddddf..
        ...............fddddf..
        ...............fddddf..
        ..ffffffffffffffddddfff
        .ffccccf4444444fddddfcf
        .fcccccf444444fdddddfcf
        .fccccccff444fdddddfccf
        .fccccccccfffffffffcccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccffffffffffffccf
        .fccccff699999999999fcf
        .fcccf6669dddd999ddddff
        .ffff6666911ff999ff119f
        .f6666666911ff999ff119f
        .f66666669999999999999f
        .f666666699999fff99999f
        .f66666669999999999999f
        fffffffffffffffffffffff
        f9966fcccbb111b6ccf69f.
        f4cccfaacbb1b6aac6fc4f.
        f9c9cfaacb6b11aac6f9cf.
        ffffffffffffffffffffff.
        .....fbbbbcccfbbbcf....
        .....fbbbbcccfbbbcf....
        .....ffffffffffffff....
        `,img`
        ...............fff.....
        ...............fddf....
        ...............fdddf...
        ...............fddddf..
        ...............fddddf..
        ...............fddddf..
        ..ffffffffffffffddddfff
        .ffccccf4444444fddddfcf
        .fcccccf444444fdddddfcf
        .fccccccff444fdddddfccf
        .fccccccccfffffffffcccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccffffffffffffccf
        .fccccff699999999999fcf
        .fcccf6669dddd999ddddff
        .ffff6666911ff999ff119f
        .f6666666911ff999ff119f
        .f66666669999999999999f
        .f666666699999fff99999f
        .f66666669999999999999f
        fffffffffffffffffffffff
        f9966fcccbb111b6ccfc4f.
        f4cccfaacbb1b6aac6f9cf.
        f9c9cfaacb6b11aac6ffff.
        fffffffffffffffffff....
        .....fcccbbbbfcbbbf....
        .....fcccbbbbfcbbbf....
        .....ffffffffffffff....
        `],
    100,
    true
    )
}
function TCA () {
    Trixie.setVelocity(0, 50)
    animation.runImageAnimation(
    Trixie,
    [img`
        .fffffffffffffffffffffffffffff.
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444ff4444f3e44f
        f44e3feeee44fff444fddf444f3e44f
        .f4e3feeee44fddf44fdddf44f3e4f.
        ..ffffeeeeffddddf4fddddf4ffff..
        .....feeefdddddddffddddf4f.....
        .....feeefddd4444ddd4444ff.....
        .....ffefbddd1177ddd7711df.....
        .....fbfbbddd117fdddf711df.....
        .....fbbbbdddddddddddddddf.....
        .....fbbbbdddddddfffdddddf.....
        .....fbbbbdddddddddddddddf.....
        .....fffffffffffffffffffff.....
        .....f776f66777ccc7c4f7df......
        .....fd76f667777777ccf77f......
        .....fffffccbbbbbbbbbf7df......
        .........ffffffffffffffff......
        .........fccbbbbfccbbf.........
        .........fccbbbbfccbbf.........
        .........fffffffffffff.........
        `,img`
        .fffffffffffffffffffffffffffff.
        f44e3fee444444444444444eef3e44f
        f44e3fee444444444444444eef3e44f
        f44e3fee444444444444444eef3e44f
        f44e3fee444444444444444eef3e44f
        f44e3fee444444444ff4444eef3e44f
        f44e3fee44fff444fddf444eef3e44f
        .f4e3fee44fddf44fdddf44eef3e4f.
        ..ffffeeffddddf4fddddf4eeffff..
        .....fefdddddddffddddf4fef.....
        .....fefddd4444ddd4444ffef.....
        .....ffbddd1177ddd7711dbff.....
        .....fbbddd117fdddf711dbbf.....
        .....fbbdddddddddddddddbbf.....
        .....fbbdddddddfffdddddbbf.....
        .....fbbdddddddddddddddbbf.....
        .....fffffffffffffffffffff.....
        .....fd7df6677ccc77c4f7df......
        .....f776f667777777ccf77f......
        .....fd76fccbbbbbbbbbf7df......
        .....ffffffffffffffffffff......
        .........fbbbbccfbbccf.........
        .........fbbbbccfbbccf.........
        .........fffffffffffff.........
        `,img`
        .fffffffffffffffffffffffffffff.
        f44e3f444444444444444eeeef3e44f
        f44e3f444444444444444eeeef3e44f
        f44e3f444444444444444eeeef3e44f
        f44e3f444444444444444eeeef3e44f
        f44e3f4444ff444444444eeeef3e44f
        f44e3f444fddf444fff44eeeef3e44f
        .f4e3f44fdddf44fddf44eeeef3e4f.
        ..ffff4fddddf4fddddffeeeeffff..
        .....f4fddddffdddddddfeeef.....
        .....ff4444ddd4444dddfeeef.....
        .....fd1177ddd7711dddbfeff.....
        .....fd117fdddf711dddbbfbf.....
        .....fdddddddddddddddbbbbf.....
        .....fdddddfffdddddddbbbbf.....
        .....fdddddddddddddddbbbbf.....
        .....fffffffffffffffffffff.....
        ......f77f4c7ccc77766fd7df.....
        ......fd7fcc777777766f677f.....
        ......ffffbbbbbbbbbccf67df.....
        .........fffffffffffffffff.....
        .........fccbbfccbbbbf.........
        .........fccbbfccbbbbf.........
        .........fffffffffffff.........
        `],
    100,
    true
    )
}
controller.player3.onEvent(ControllerEvent.Connected, function () {
    zane()
})
function EDA () {
    Eli_Shane.setVelocity(0, 0)
    animation.runImageAnimation(
    Eli_Shane,
    [img`
        ....fffffffffffffffff...
        ...fcccccccccccccccccf..
        ..fcccccccccccccccccccf.
        ..fcccccccccccccccccccff
        .fcccccccccccccccccccccf
        ffcccccccccccccccccccccf
        ffcccccccccccccccccccccf
        ffcccccccccccccccccccccf
        fffcccccccccccccccccccff
        .ffcccccccccccccccccccf.
        ..fcccccccccccccccccccf.
        ..fcccccccccccccccccccf.
        ..fffcccccccccccccccfff.
        ..feefcccccccccccccfeef.
        ..fddefffffffffffffeddf.
        ..fdddeeeeeeeeeeeeedddf.
        ...ffffffffffffffffffff.
        ...fedfccf4eee4fccfdef..
        ...fccf11f44444f11fccf..
        ...fcdf44f44444f46fdcf..
        ...fffffffffffffffffff..
        ......fccbbbbfccbbf.....
        ......fccbbbbfccbbf.....
        ......fffffffffffff.....
        `],
    200,
    true
    )
}
function TCD () {
    Trixie.setVelocity(50, 0)
    animation.runImageAnimation(
    Trixie,
    [img`
        .fffffffffffffffffffffffffffff.
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444ff4444f3e44f
        f44e3feeee44fff444fddf444f3e44f
        .f4e3feeee44fddf44fdddf44f3e4f.
        ..ffffeeeeffddddf4fddddf4ffff..
        .....feeefdddddddffddddf4f.....
        .....feeefddd4444ddd4444ff.....
        .....ffefbddd1177ddd7711df.....
        .....fbfbbddd117fdddf711df.....
        .....fbbbbdddddddddddddddf.....
        .....fbbbbdddddddfffdddddf.....
        .....fbbbbdddddddddddddddf.....
        .....fffffffffffffffffffff.....
        .....f776f66777ccc7c4f7df......
        .....fd76f667777777ccf77f......
        .....fffffccbbbbbbbbbf7df......
        .........ffffffffffffffff......
        .........fccbbbbfccbbf.........
        .........fccbbbbfccbbf.........
        .........fffffffffffff.........
        `,img`
        .fffffffffffffffffffffffffffff.
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444ff4444f3e44f
        f44e3feeee44fff444fddf444f3e44f
        .f4e3feeee44fddf44fdddf44f3e4f.
        ..ffffeeeeffddddf4fddddf4ffff..
        .....feeefdddddddffddddf4f.....
        .....feeefddd4444ddd4444ff.....
        .....ffefbddd1177ddd7711df.....
        .....fbfbbddd117fdddf711df.....
        .....fbbbbdddddddddddddddf.....
        .....fbbbbdddddddfffdddddf.....
        .....fbbbbdddddddddddddddf.....
        .....fffffffffffffffffffff.....
        .....fd7df6677ccc77c4f7df......
        .....f776f667777777ccf77f......
        .....fd76fccbbbbbbbbbf7df......
        .....ffffffffffffffffffff......
        .........fbbbbccfbbccf.........
        .........fbbbbccfbbccf.........
        .........fffffffffffff.........
        `,img`
        .fffffffffffffffffffffffffffff.
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444444444f3e44f
        f44e3feeee444444444ff4444f3e44f
        f44e3feeee44fff444fddf444f3e44f
        .f4e3feeee44fddf44fdddf44f3e4f.
        ..ffffeeeeffddddf4fddddf4ffff..
        .....feeefdddddddffddddf4f.....
        .....feeefddd4444ddd4444ff.....
        .....ffefbddd1177ddd7711df.....
        .....fbfbbddd117fdddf711df.....
        .....fbbbbdddddddddddddddf.....
        .....fbbbbdddddddfffdddddf.....
        .....fbbbbdddddddddddddddf.....
        .....fffffffffffffffffffff.....
        .....fd7df66777ccc7c4f77f......
        .....f776f667777777ccf7df......
        .....fd76fccbbbbbbbbbffff......
        .....fffffffffffffffff.........
        .........fbbbbccfbbccf.........
        .........fbbbbccfbbccf.........
        .........fffffffffffff.........
        `],
    100,
    true
    )
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    Trixie.setVelocity(0, 0)
    animation.runImageAnimation(
    Trixie,
    [img`
        .fffffffffffffffffffffffffffff.
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        .f4e3f4444444444444444444f3e4f.
        ..ffff4444444444444444444ffff..
        .....f4444444444444444444f.....
        .....f4444444444444444444f.....
        .....ff44444444444444444ff.....
        .....fbfffffffffffffffffbf.....
        .....fbbbbbbbbbbbbbbbbbbbf.....
        .....fdddddddddddddddddddf.....
        .....fdddddddddddddddddddf.....
        .....fffffffffffffffffffff.....
        .....fd7df66777777777f7df......
        .....f776f66777777777f77f......
        .....fd76f9cbbbbbbbbbf7df......
        .....ffffffffffffffffffff......
        .........fccbbbbfccbbf.........
        .........fccbbbbfccbbf.........
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Elemental_De_Metal, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (inventario_P1) {
        inventario_P1.push(otherSprite)
    }
})
sprites.onOverlap(SpriteKind.Player3, SpriteKind.Elemental_De_Metal, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_P3) {
        Inventario_P3.push(otherSprite)
    }
})
function EDI () {
    Eli_Shane.setVelocity(0, 0)
    animation.runImageAnimation(
    Eli_Shane,
    [img`
        .fffffffffffffffffff....
        .fccccccccccccccccccf...
        .fcccccccccccccccccccf..
        .fcccccccccccccccccccf..
        .fcccccccccccccfccccccf.
        .ffccfccccccccccfcccccf.
        .fdffdfccccccccccfccccf.
        .fdfdddfccccccccccfcccf.
        .fddddddfffffffffffccff.
        .fddddddddddddddefcccf..
        .fdffffdddffffddeffccf..
        .fd11ffdddff11ddeefccf..
        .fd11ffdddff11ddeeffcf..
        .fddddddddddddddeeefff..
        .fdddddfffddddddeeeeff..
        .fddddddddddddddeeeeef..
        .fffffffffffffffffffff..
        ..fccfcccccbb66ccfeedf..
        ..fcdf11ccb6ccc11fcccf..
        ..ffff44b6ccccc44fcdcf..
        .....fffffffffffffffff..
        .....fccbbfccbbbbf......
        .....fccbbfccbbbbf......
        .....fffffffffffff......
        `,img`
        .fffffffffffffffffff....
        .fccccccccccccccccccf...
        .fcccccccccccccccccccf..
        .fcccccccccccccccccccf..
        .fcccccccccccccfccccccf.
        .ffccfccccccccccfcccccf.
        .fdffdfccccccccccfccccf.
        .fdfdddfccccccccccfcccf.
        .fddddddfffffffffffccff.
        .fddddddddddddddefcccf..
        .fdffffdddffffddeffccf..
        .fdbbbbdddbbbbddeefccf..
        .fdbbbbdddbbbbddeeffcf..
        .fddddddddddddddeeefff..
        .fdddddfffddddddeeeeff..
        .fddddddddddddddeeeeef..
        .fffffffffffffffffffff..
        ..fccfcccccbb66ccfeedf..
        ..fcdf11ccb6ccc11fcccf..
        ..ffff44b6ccccc44fcdcf..
        .....fffffffffffffffff..
        .....fccbbfccbbbbf......
        .....fccbbfccbbbbf......
        .....fffffffffffff......
        `,img`
        .fffffffffffffffffff....
        .fccccccccccccccccccf...
        .fcccccccccccccccccccf..
        .fcccccccccccccccccccf..
        .fcccccccccccccfccccccf.
        .ffccfccccccccccfcccccf.
        .fdffdfccccccccccfccccf.
        .fdfdddfccccccccccfcccf.
        .fddddddfffffffffffccff.
        .fddddddddddddddefcccf..
        .fdffffdddffffddeffccf..
        .fd11ffdddff11ddeefccf..
        .fd11ffdddff11ddeeffcf..
        .fddddddddddddddeeefff..
        .fdddddfffddddddeeeeff..
        .fddddddddddddddeeeeef..
        .fffffffffffffffffffff..
        ..fccfcccccbb66ccfeedf..
        ..fcdf11ccb6ccc11fcccf..
        ..ffff44b6ccccc44fcdcf..
        .....fffffffffffffffff..
        .....fccbbfccbbbbf......
        .....fccbbfccbbbbf......
        .....fffffffffffff......
        `],
    500,
    true
    )
}
controller.player3.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    Zane_camina_a_la_derecha()
})
sprites.onOverlap(SpriteKind.Player3, SpriteKind.ElementalTierra, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_P3) {
        Inventario_P3.push(otherSprite)
    }
})
function EDC () {
    Eli_Shane.setVelocity(0, 0)
    animation.runImageAnimation(
    Eli_Shane,
    [img`
        ....fffffffffffffffffff.
        ...fcccccccccccccccccccf
        ..fccccccccccccccccccccf
        ..fccccccccccccccccccccf
        .fccccfffccccccccccccccf
        .fccccfefccfcccccccccccf
        .fcccffedffdfccccccccccf
        .fcccffedfdddfcccccccccf
        .ffccffeddddddffffffffff
        ..fcccfeddddddddddddddf.
        ..fccffeddffffdddffffdf.
        ..fccfeedd11ffdddff11df.
        ..fcffeedd11ffdddff11df.
        ..fffeeeddddddddddddddf.
        ..ffeeeeddddddfffdddddf.
        ..feeeeeddddddddddddddf.
        .ffffffffffffffffffffff.
        .fddeefcccccbb66ccfdef..
        .fccccf11ccb6ccc11fccf..
        .fdcdcf44b6ccccc44fdcf..
        .fffffffffffffffffffff..
        ......fccbbbbfccbbf.....
        ......fccbbbbfccbbf.....
        ......fffffffffffff.....
        `,img`
        ....fffffffffffffffffff.
        ...fcccccccccccccccccccf
        ..fccccccccccccccccccccf
        ..fccccccccccccccccccccf
        .fccccfffccccccccccccccf
        .fccccfefccfcccccccccccf
        .fcccffedffdfccccccccccf
        .fcccffedfdddfcccccccccf
        .ffccffeddddddffffffffff
        ..fcccfeddddddddddddddf.
        ..fccffeddffffdddffffdf.
        ..fccfeeddbbbbdddbbbbdf.
        ..fcffeeddbbbbdddbbbbdf.
        ..fffeeeddddddddddddddf.
        ..ffeeeeddddddfffdddddf.
        ..feeeeeddddddddddddddf.
        .ffffffffffffffffffffff.
        .fddeefcccccbb66ccfdef..
        .fccccf11ccb6ccc11fccf..
        .fdcdcf44b6ccccc44fdcf..
        .fffffffffffffffffffff..
        ......fccbbbbfccbbf.....
        ......fccbbbbfccbbf.....
        ......fffffffffffff.....
        `,img`
        ....fffffffffffffffffff.
        ...fcccccccccccccccccccf
        ..fccccccccccccccccccccf
        ..fccccccccccccccccccccf
        .fccccfffccccccccccccccf
        .fccccfefccfcccccccccccf
        .fcccffedffdfccccccccccf
        .fcccffedfdddfcccccccccf
        .ffccffeddddddffffffffff
        ..fcccfeddddddddddddddf.
        ..fccffeddffffdddffffdf.
        ..fccfeedd11ffdddff11df.
        ..fcffeedd11ffdddff11df.
        ..fffeeeddddddddddddddf.
        ..ffeeeeddddddfffdddddf.
        ..feeeeeddddddddddddddf.
        .ffffffffffffffffffffff.
        .fddeefcccccbb66ccfdef..
        .fccccf11ccb6ccc11fccf..
        .fdcdcf44b6ccccc44fdcf..
        .fffffffffffffffffffff..
        ......fccbbbbfccbbf.....
        ......fccbbbbfccbbf.....
        ......fffffffffffff.....
        `],
    500,
    true
    )
}
sprites.onOverlap(SpriteKind.Player4, SpriteKind.Babosa, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_p4) {
        Inventario_p4.push(otherSprite)
    }
})
function CEHBK () {
    if (spriteutils.distanceBetween(Kord, Elemental_de_hielo2) < 2) {
        Elemental_de_hielo2.follow(Kord, -5)
        Elemental_de_hielo2.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Kord, Elemental_de_hielo2) > 0) {
        Elemental_de_hielo2.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_de_hielo2.vy < 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 1 9 6 9 1 1 f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 1 1 9 6 9 1 f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 1 9 6 9 1 1 f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 9 6 9 1 1 1 f . . 
                . . f f f f f f f f f . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_hielo2.vy > 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f 1 f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_hielo2.vx < 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f 1 f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_hielo2.vx > 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 f f f f f f f . . 
                . . . f . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f 1 f . . 
                . . . . . . . . . f . . . 
                `],
            500,
            true
            )
        }
    }
}
function CEPBK () {
    if (spriteutils.distanceBetween(Kord, Elemental_planta) < 2) {
        Elemental_planta.follow(Kord, -5)
        Elemental_planta.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Kord, Elemental_planta) > 0) {
        Elemental_planta.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_planta.vy < 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 7 9 1 9 7 7 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 7 7 9 1 9 7 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 7 9 1 9 7 7 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 9 1 9 7 7 7 f . 
                . f f f f f f f f f . 
                `],
            500,
            true
            )
        } else if (Elemental_planta.vy > 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f 7 f . 
                . . . . . . . . f . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_planta.vx < 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f f 1 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 f f f f f f f . 
                . . f . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f 7 f . 
                . . . . . . . . f . . 
                `],
            500,
            true
            )
        } else if (Elemental_planta.vx > 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 1 f f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f 7 f . 
                . . . . . . . . f . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        }
    }
}
function Trixie2 () {
    sprites.destroy(Trixie)
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Trixie_Arriba()
})
function CEPBP () {
    if (spriteutils.distanceBetween(Pronto, Elemental_planta) < 5) {
        Elemental_planta.follow(Pronto, -5)
        Elemental_planta.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Pronto, Elemental_planta) > 0) {
        Elemental_planta.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_planta.vy < 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 7 9 1 9 7 7 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 7 7 9 1 9 7 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 7 9 1 9 7 7 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . f 3 7 3 f . . . 
                . . . . f 7 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 7 7 3 3 3 7 7 f . 
                . f 7 7 7 3 7 7 7 f . 
                . . f 7 7 7 7 7 f . . 
                . f 7 7 7 7 7 7 7 f . 
                . f 7 7 7 7 7 7 7 f . 
                . . f 7 9 9 9 7 f . . 
                . f 7 9 1 9 7 7 7 f . 
                . f f f f f f f f f . 
                `],
            500,
            true
            )
        } else if (Elemental_planta.vy > 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f 7 f . 
                . . . . . . . . f . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_planta.vx < 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f f 1 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 f f f f f f f . 
                . . f . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f 7 f . 
                . . . . . . . . f . . 
                `],
            500,
            true
            )
        } else if (Elemental_planta.vx > 0) {
            animation.runImageAnimation(
            Elemental_planta,
            [img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 1 f f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f 7 f . 
                . . . . . . . . f . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . . f . . . . . 
                . . . . f 7 f . . . . 
                . . . . f 7 f . . . . 
                . . . . f 3 f . . . . 
                . . . f 3 5 3 f . . . 
                . . . . f 3 f . . . . 
                . f f . f 7 f . f f . 
                . f 3 f 3 3 3 f 3 f . 
                . f 3 3 3 3 3 3 3 f . 
                f 3 3 3 3 3 3 3 3 3 f 
                . f 3 3 3 3 3 3 3 f . 
                . f 1 f 9 3 9 f 1 f . 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 9 1 1 1 9 7 f . 
                . . f 7 9 1 9 7 f . . 
                . f 7 7 9 9 9 7 7 f . 
                . f 7 f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        }
    }
}
function CEMBE () {
    if (spriteutils.distanceBetween(Eli_Shane, ElementalMetal) < 2) {
        ElementalMetal.follow(Eli_Shane, -5)
        ElementalMetal.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Eli_Shane, ElementalMetal) > 0) {
        ElementalMetal.setVelocity(randint(-10, 10), randint(-10, 10))
        if (ElementalMetal.vy < 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d d c b c d d f . 
                . f f f f f f f f f . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d d d c b c d f . 
                . f f f f f f f f f . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d d c b c d d f . 
                . f f f f f f f f f . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d c b c d d d f . 
                . f f f f f f f f f . 
                `],
            500,
            true
            )
        } else if (ElementalMetal.vy > 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f d f . 
                . . . . . . . . f . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f d f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        } else if (ElementalMetal.vx < 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f f 1 d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f d f . 
                . . . . . . . . f . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f d f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        } else if (ElementalMetal.vx > 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d 1 f f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f d f . 
                . . . . . . . . f . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f d f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        }
    }
}
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    TCD()
})
controller.player3.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    Zane_camina_se_detiene_en_la_izquierda()
})
controller.player4.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    Pronto.setVelocity(0, 0)
    animation.runImageAnimation(
    Pronto,
    [img`
        ...fffffffffffffffffff.
        ..f444455555555555555f.
        .f4444455fffffffffff5f.
        .f42244ffbbbbbbbbbbbff.
        .f42244fbbdddddddddddf.
        .f4444ffbbdddddddddddf.
        .fffffbbbddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddffffdddffffdf.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdddddd333dddddf.
        .fbbbbbdddddd333dddddf.
        .fbbbbbddddddddddddddf.
        ffffffffffffffffffffff.
        f1111fccceeeeeeccf11f..
        f9999f9cc11ee11c9f99f..
        fccccf1cc999999c1fccf..
        fffffffffffffffffffff..
        .....f667777f6677f.....
        .....f667777f6677f.....
        .....fffffffffffff.....
        `,img`
        ...fffffffffffffffffff.
        ..f444455555555555555f.
        .f4444455fffffffffff5f.
        .f42244ffbbbbbbbbbbbff.
        .f42244fbbdddddddddddf.
        .f4444ffbbdddddddddddf.
        .fffffbbbddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddffffdddffffdf.
        .fbbbbbddbbbbdddbbbbdf.
        .fbbbbbddbbbbdddbbbbdf.
        .fbbbbbdddddd333dddddf.
        .fbbbbbdddddd333dddddf.
        .fbbbbbddddddddddddddf.
        ffffffffffffffffffffff.
        f1111fccceeeeeeccf11f..
        f9999f9cc11ee11c9f99f..
        fccccf1cc999999c1fccf..
        fffffffffffffffffffff..
        .....f667777f6677f.....
        .....f667777f6677f.....
        .....fffffffffffff.....
        `,img`
        ...fffffffffffffffffff.
        ..f444455555555555555f.
        .f4444455fffffffffff5f.
        .f42244ffbbbbbbbbbbbff.
        .f42244fbbdddddddddddf.
        .f4444ffbbdddddddddddf.
        .fffffbbbddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddffffdddffffdf.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdddddd333dddddf.
        .fbbbbbdddddd333dddddf.
        .fbbbbbddddddddddddddf.
        ffffffffffffffffffffff.
        f1111fccceeeeeeccf11f..
        f9999f9cc11ee11c9f99f..
        fccccf1cc999999c1fccf..
        fffffffffffffffffffff..
        .....f667777f6677f.....
        .....f667777f6677f.....
        .....fffffffffffff.....
        `],
    500,
    true
    )
})
function CEABP () {
    if (spriteutils.distanceBetween(Kord, Elemental_de_agua) < 5) {
        Elemental_de_agua.follow(Kord, -5)
        Elemental_de_agua.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Kord, Elemental_de_agua) > 0) {
        Elemental_de_agua.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_de_agua.vy < 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 6 9 6 9 6 6 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 6 6 9 6 9 6 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 6 9 6 9 6 6 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 9 6 9 6 6 6 f . 
                . f f f f f f f f f . 
                `],
            500,
            true
            )
        } else if (Elemental_de_agua.vy > 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 f 1 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 6 6 9 9 9 6 6 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 1 f 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_agua.vx < 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 f 1 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 6 6 9 9 9 6 6 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 f 1 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . . f 6 9 9 9 6 6 f . 
                . . f 6 f f f f f f . 
                . . . f . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_agua.vx > 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 1 f 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 6 6 9 9 9 6 6 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . . f 6 9 9 9 6 6 f . 
                . . f 6 f f f f f f . 
                . . . f . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 1 f 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `],
            500,
            true
            )
        }
    }
}
function EDAB () {
    Eli_Shane.setVelocity(0, 0)
    animation.runImageAnimation(
    Eli_Shane,
    [img`
        ...fffffffffffffffffff...
        ..fccccccccccccccccccf...
        .fcccccccccccccccccccf...
        .fcccccccccccccccccccf...
        fccfffcccccccccccccccf...
        fccfefccfcccccccccccccf..
        fcffedffdfcccccccccccccf.
        fcffedfdddfcccccccccccccf
        ffffeddddddffffffffffffff
        .fffeddddddddddddddeff...
        .fcfeddffffdddffffdeff...
        .ffeedd11ffdddff11deef...
        .ffeedd11ffdddff11deef...
        .feeeddddddddddddddeef...
        .feeeddddddfffdddddeef...
        .feeeddddddddddddddeef...
        .fffffffffffffffffffff...
        .fdeefcccccbb66ccfdef....
        .fcccf11ccb6ccc11fccf....
        .fcdcf44b6ccccc44fdcf....
        .ffffffffffffffffffff....
        .....fccbbbbfccbbf.......
        .....fccbbbbfccbbf.......
        .....fffffffffffff.......
        `,img`
        ...fffffffffffffffffff...
        ..fccccccccccccccccccf...
        .fcccccccccccccccccccf...
        .fcccccccccccccccccccf...
        fccfffcccccccccccccccf...
        fccfefccfcccccccccccccf..
        fcffedffdfcccccccccccccf.
        fcffedfdddfcccccccccccccf
        ffffeddddddffffffffffffff
        .fffeddddddddddddddeff...
        .fcfeddffffdddffffdeff...
        .ffeeddbbbbdddbbbbdeef...
        .ffeeddbbbbdddbbbbdeef...
        .feeeddddddddddddddeef...
        .feeeddddddfffdddddeef...
        .feeeddddddddddddddeef...
        .fffffffffffffffffffff...
        .fdeefcccccbb66ccfdef....
        .fcccf11ccb6ccc11fccf....
        .fcdcf44b6ccccc44fdcf....
        .ffffffffffffffffffff....
        .....fccbbbbfccbbf.......
        .....fccbbbbfccbbf.......
        .....fffffffffffff.......
        `,img`
        ...fffffffffffffffffff...
        ..fccccccccccccccccccf...
        .fcccccccccccccccccccf...
        .fcccccccccccccccccccf...
        fccfffcccccccccccccccf...
        fccfefccfcccccccccccccf..
        fcffedffdfcccccccccccccf.
        fcffedfdddfcccccccccccccf
        ffffeddddddffffffffffffff
        .fffeddddddddddddddeff...
        .fcfeddffffdddffffdeff...
        .ffeedd11ffdddff11deef...
        .ffeedd11ffdddff11deef...
        .feeeddddddddddddddeef...
        .feeeddddddfffdddddeef...
        .feeeddddddddddddddeef...
        .fffffffffffffffffffff...
        .fdeefcccccbb66ccfdef....
        .fcccf11ccb6ccc11fccf....
        .fcdcf44b6ccccc44fdcf....
        .ffffffffffffffffffff....
        .....fccbbbbfccbbf.......
        .....fccbbbbfccbbf.......
        .....fffffffffffff.......
        `],
    500,
    true
    )
}
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    EDAB()
})
function Trixie_Arriba () {
    Trixie.setVelocity(0, -50)
    animation.runImageAnimation(
    Trixie,
    [img`
        .fffffffffffffffffffffffffffff.
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        .f4e3f4444444444444444444f3e4f.
        ..ffff4444444444444444444ffff..
        .....f4444444444444444444f.....
        .....f4444444444444444444f.....
        .....ff44444444444444444ff.....
        .....fbfffffffffffffffffbf.....
        .....fbbbbbbbbbbbbbbbbbbbf.....
        .....fdddddddddddddddddddf.....
        .....fdddddddddddddddddddf.....
        .....fffffffffffffffffffff.....
        .....f776f66777777777f7df......
        .....fd76f66777777777f77f......
        .....fffff9cbbbbbbbbbf7df......
        .........ffffffffffffffff......
        .........fccbbbbfccbbf.........
        .........fccbbbbfccbbf.........
        `,img`
        .fffffffffffffffffffffffffffff.
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        .f4e3f4444444444444444444f3e4f.
        ..ffff4444444444444444444ffff..
        .....f4444444444444444444f.....
        .....f4444444444444444444f.....
        .....ff44444444444444444ff.....
        .....fbfffffffffffffffffbf.....
        .....fbbbbbbbbbbbbbbbbbbbf.....
        .....fdddddddddddddddddddf.....
        .....fdddddddddddddddddddf.....
        .....fffffffffffffffffffff.....
        .....fd7df66777777777f7df......
        .....f776f66777777777f77f......
        .....fd76f9cbbbbbbbbbf7df......
        .....ffffffffffffffffffff......
        .........fccbbbbfccbbf.........
        .........fccbbbbfccbbf.........
        `,img`
        .fffffffffffffffffffffffffffff.
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        f44e3f4444444444444444444f3e44f
        .f4e3f4444444444444444444f3e4f.
        ..ffff4444444444444444444ffff..
        .....f4444444444444444444f.....
        .....f4444444444444444444f.....
        .....ff44444444444444444ff.....
        .....fbfffffffffffffffffbf.....
        .....fbbbbbbbbbbbbbbbbbbbf.....
        .....fdddddddddddddddddddf.....
        .....fdddddddddddddddddddf.....
        .....fffffffffffffffffffff.....
        .....fd7df66777777777f77f......
        .....f776f66777777777f7df......
        .....fd76f9cbbbbbbbbbffff......
        .....fffffffffffffffff.........
        .........fccbbbbfccbbf.........
        .........fccbbbbfccbbf.........
        `],
    200,
    true
    )
}
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Elementalagua, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_p2) {
        Inventario_p2.push(otherSprite)
    }
})
function ECAB () {
    Eli_Shane.setVelocity(0, 50)
    animation.runImageAnimation(
    Eli_Shane,
    [img`
        ....fffffffffffffffffff..
        ...fccccccccccccccccccf..
        ..fcccccccccccccccccccf..
        ..fcccccccccccccccccccf..
        .fccccfffccccccccccccff..
        .fccccfefccfccccccccccf..
        .fcccffedffdfccccccccccf.
        .fcccffedfdddfccccccccccf
        .ffccffeddddddfffffffffff
        ..fcccfeddddddddddddddf..
        ..fccffeddffffdddffffdf..
        ..fccfeedd11ffdddff11df..
        ..fcffeedd11ffdddff11df..
        ..fffeeeddddddddddddddf..
        ..ffeeeeddddddfffdddddf..
        ..feeeeeddddddddddddddf..
        .ffffffffffffffffffffff..
        .fddeefcccccbb66ccfdef...
        .fccccf11ccb6ccc11fccf...
        .fdcdcf44b6ccccc44fdcf...
        .fffffffffffffffffffff...
        ......fbbbbccfbbccf......
        ......fbbbbccfbbccf......
        ......fffffffffffff......
        `,img`
        ...fffffffffffffffffff...
        ..fccccccccccccccccccf...
        .fcccccccccccccccccccf...
        .fcccccccccccccccccccf...
        fccfffcccccccccccccccf...
        fccfefccfcccccccccccccf..
        fcffedffdfcccccccccccccf.
        fcffedfdddfcccccccccccccf
        ffffeddddddffffffffffffff
        .fffeddddddddddddddeff...
        .fcfeddffffdddffffdeff...
        .ffeedd11ffdddff11deef...
        .ffeedd11ffdddff11deef...
        .feeeddddddddddddddeef...
        .feeeddddddfffdddddeef...
        .feeeddddddddddddddeef...
        .fffffffffffffffffffff...
        .fdeefcccccbb66ccfdef....
        .fcccf11ccb6ccc11fccf....
        .fcdcf44b6ccccc44fdcf....
        .ffffffffffffffffffff....
        .....fccbbbbfccbbf.......
        .....fccbbbbfccbbf.......
        .....fffffffffffff.......
        `,img`
        .fffffffffffffffffff.....
        .fccccccccccccccccccf....
        .fcccccccccccccccccccf...
        .fcccccccccccccccccccf...
        .fcccccccccccccfccccccf..
        .ffccfccccccccccfcccccf..
        .fdffdfccccccccccfccccf..
        .fdfdddfccccccccccfcccf..
        .fddddddfffffffffffccff..
        .fddddddddddddddefcccf...
        .fdffffdddffffddeffccf...
        .fd11ffdddff11ddeefccf...
        .fd11ffdddff11ddeeffcf...
        .fddddddddddddddeeefff...
        .fdddddfffddddddeeeeff...
        .fddddddddddddddeeeeef...
        .ffffffffffffffffffffff..
        ..fedfcccccbb66ccfeeddf..
        ..fccf11ccb6ccc11fccccf..
        ..fcdf44b6ccccc44fcdcdf..
        ..fffffffffffffffffffff..
        .....fccbbfccbbbbf.......
        .....fccbbfccbbbbf.......
        .....fffffffffffff.......
        `],
    200,
    true
    )
}
function Inventario4 () {
    Inventario_p4 = []
    Seleccion4 = 0
}
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Elemental_De_Metal, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_p2) {
        Inventario_p2.push(otherSprite)
    }
})
function Tdab () {
    Trixie.setVelocity(0, 0)
    animation.runImageAnimation(
    Trixie,
    [img`
        .fffffffffffffffffffffffffffff.
        f44e3feee4444444444444444f3e44f
        f44e3feee4444444444444444f3e44f
        f44e3feee4444444444444444f3e44f
        f44e3feee4444444444444444f3e44f
        f44e3feee444444444ff44444f3e44f
        f44e3feee44fff444fddf4444f3e44f
        f44e3feee44fddf44fdddf444f3e44f
        .f4e3feeeffddddf4fddddf4ff3e4f.
        ..ffffeefdddddddffddddf4fffff..
        .....feefdd4444ddd4444dfbf.....
        .....fefbdd1177ddd7711dbbf.....
        .....ffbbdd117fdddf711dbbf.....
        .....fbbbddddddddddddddbbf.....
        .....fbbbddddddfffdddddbbf.....
        .....fbbbddddddddddddddbbf.....
        .....fffffffffffffffffffff.....
        .....fdd7f6777ccc77c4f7df......
        .....f777f677777777ccf77f......
        .....fdd7fcbbbbbbbbbbf7df......
        .....ffffffffffffffffffff......
        .........fccbbbbfccbbf.........
        .........fccbbbbfccbbf.........
        .........fffffffffffff.........
        `,img`
        .fffffffffffffffffffffffffffff.
        f44e3feee4444444444444444f3e44f
        f44e3feee4444444444444444f3e44f
        f44e3feee4444444444444444f3e44f
        f44e3feee4444444444444444f3e44f
        f44e3feee444444444ff44444f3e44f
        f44e3feee44fff444fddf4444f3e44f
        f44e3feee44fddf44fdddf444f3e44f
        .f4e3feeeffddddf4fddddf4ff3e4f.
        ..ffffeefdddddddffddddf4fffff..
        .....feefdd4444ddd4444dfbf.....
        .....fefbddbbbbdddbbbbdbbf.....
        .....ffbbddbbbbdddbbbbdbbf.....
        .....fbbbddddddddddddddbbf.....
        .....fbbbddddddfffdddddbbf.....
        .....fbbbddddddddddddddbbf.....
        .....fffffffffffffffffffff.....
        .....fdd7f6777ccc77c4f7df......
        .....f777f677777777ccf77f......
        .....fdd7fcbbbbbbbbbbf7df......
        .....ffffffffffffffffffff......
        .........fccbbbbfccbbf.........
        .........fccbbbbfccbbf.........
        .........fffffffffffff.........
        `,img`
        .fffffffffffffffffffffffffffff.
        f44e3feee4444444444444444f3e44f
        f44e3feee4444444444444444f3e44f
        f44e3feee4444444444444444f3e44f
        f44e3feee4444444444444444f3e44f
        f44e3feee444444444ff44444f3e44f
        f44e3feee44fff444fddf4444f3e44f
        f44e3feee44fddf44fdddf444f3e44f
        .f4e3feeeffddddf4fddddf4ff3e4f.
        ..ffffeefdddddddffddddf4fffff..
        .....feefdd4444ddd4444dfbf.....
        .....fefbdd1177ddd7711dbbf.....
        .....ffbbdd117fdddf711dbbf.....
        .....fbbbddddddddddddddbbf.....
        .....fbbbddddddfffdddddbbf.....
        .....fbbbddddddddddddddbbf.....
        .....fffffffffffffffffffff.....
        .....fdd7f6777ccc77c4f7df......
        .....f777f677777777ccf77f......
        .....fdd7fcbbbbbbbbbbf7df......
        .....ffffffffffffffffffff......
        .........fccbbbbfccbbf.........
        .........fccbbbbfccbbf.........
        .........fffffffffffff.........
        `],
    500,
    true
    )
}
function ACD () {
    Eli_Shane.setVelocity(50, 0)
    animation.runImageAnimation(
    Eli_Shane,
    [img`
        ....ffffffffffffffffffff
        ...fcccccccccccccccccccf
        ..fccccccccccccccccccccf
        ..fccccccccccccccccccccf
        .fccccfffccccccccccccccf
        .fcccffefccfcccccccccccf
        .fcccffedffdfccccccccccf
        .fcccffedfdddfcccccccccf
        .ffccffeddddddffffffffff
        ..fcccfeddddddddddddddf.
        ..fccffeddffffdddffffdf.
        ..fccfeedd11ffdddff11df.
        ..fcffeedd11ffdddff11df.
        ..fffeeeddddddddddddddf.
        ..ffeeeeddddddfffdddddf.
        ..feeeeeddddddddddddddf.
        ..fffffffffffffffffffff.
        ..fdeefcccccbb66ccfdef..
        ..fcccf11ccb6ccc11fccf..
        ..fcdcf44b6ccccc44fdcf..
        ..ffffffffffffffffffff..
        ......fccbbbbfccbbf.....
        ......fccbbbbfccbbf.....
        ......fffffffffffff.....
        `,img`
        ....ffffffffffffffffffff
        ...fcccccccccccccccccccf
        ..fccccccccccccccccccccf
        ..fccccccccccccccccccccf
        .fccccfffccccccccccccccf
        .fcccffefccfcccccccccccf
        .fcccffedffdfccccccccccf
        .fcccffedfdddfcccccccccf
        .ffccffeddddddffffffffff
        ..fcccfeddddddddddddddf.
        ..fccffeddffffdddffffdf.
        ..fccfeedd11ffdddff11df.
        ..fcffeedd11ffdddff11df.
        ..fffeeeddddddddddddddf.
        ..ffeeeeddddddfffdddddf.
        ..feeeeeddddddddddddddf.
        ..fffffffffffffffffffff.
        ..fdeefcccccbb66ccfccf..
        ..fcccf11ccb6ccc11fdcf..
        ..fcdcf44b6ccccc44ffff..
        ..fffffffffffffffff.....
        ......fbbbbccfbbccf.....
        ......fbbbbccfbbccf.....
        ......fffffffffffff.....
        `,img`
        ....ffffffffffffffffffff
        ...fcccccccccccccccccccf
        ..fccccccccccccccccccccf
        ..fccccccccccccccccccccf
        .fccccfffccccccccccccccf
        .fcccffefccfcccccccccccf
        .fcccffedffdfccccccccccf
        .fcccffedfdddfcccccccccf
        .ffccffeddddddffffffffff
        ..fcccfeddddddddddddddf.
        ..fccffeddffffdddffffdf.
        ..fccfeedd11ffdddff11df.
        ..fcffeedd11ffdddff11df.
        ..fffeeeddddddddddddddf.
        ..ffeeeeddddddfffdddddf.
        ..feeeeeddddddddddddddf.
        ..fffffffffffffffffffff.
        ..fdeefcccccbb66ccfdef..
        ..fcccf11ccb6ccc11fccf..
        ..fcdcf44b6ccccc44fdcf..
        ..ffffffffffffffffffff..
        ......fccbbbbfccbbf.....
        ......fccbbbbfccbbf.....
        ......fffffffffffff.....
        `,img`
        ....ffffffffffffffffffff
        ...fcccccccccccccccccccf
        ..fccccccccccccccccccccf
        ..fccccccccccccccccccccf
        .fccccfffccccccccccccccf
        .fcccffefccfcccccccccccf
        .fcccffedffdfccccccccccf
        .fcccffedfdddfcccccccccf
        .ffccffeddddddffffffffff
        ..fcccfeddddddddddddddf.
        ..fccffeddffffdddffffdf.
        ..fccfeedd11ffdddff11df.
        ..fcffeedd11ffdddff11df.
        ..fffeeeddddddddddddddf.
        ..ffeeeeddddddfffdddddf.
        ..feeeeeddddddddddddddf.
        ..fffffffffffffffffffff.
        ..fcccfcccccbb66ccfdef..
        ..fcdcf11ccb6ccc11fccf..
        ..fffff44b6ccccc44fdcf..
        ......ffffffffffffffff..
        ......fccbbbbfccbbf.....
        ......fccbbbbfccbbf.....
        ......fffffffffffff.....
        `],
    100,
    true
    )
}
function CEABK () {
    if (spriteutils.distanceBetween(Kord, Elemental_de_agua) < 2) {
        Elemental_de_agua.follow(Kord, -5)
        Elemental_de_agua.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Kord, Elemental_de_agua) > 0) {
        Elemental_de_agua.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_de_agua.vy < 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 6 9 6 9 6 6 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 6 6 9 6 9 6 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 6 9 6 9 6 6 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 9 6 9 6 6 6 f . 
                . f f f f f f f f f . 
                `],
            500,
            true
            )
        } else if (Elemental_de_agua.vy > 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 f 1 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 6 6 9 9 9 6 6 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 1 f 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_agua.vx < 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 f 1 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 6 6 9 9 9 6 6 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 f 1 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . . f 6 9 9 9 6 6 f . 
                . . f 6 f f f f f f . 
                . . . f . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_agua.vx > 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 1 f 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 6 6 9 9 9 6 6 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . . f 6 9 9 9 6 6 f . 
                . . f 6 f f f f f f . 
                . . . f . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 1 f 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `],
            500,
            true
            )
        }
    }
}
function CEMBP () {
    if (spriteutils.distanceBetween(Pronto, ElementalMetal) < 2) {
        ElementalMetal.follow(Pronto, -5)
        ElementalMetal.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Pronto, ElementalMetal) > 0) {
        ElementalMetal.setVelocity(randint(-10, 10), randint(-10, 10))
        if (ElementalMetal.vy < 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d d c b c d d f . 
                . f f f f f f f f f . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d d d c b c d f . 
                . f f f f f f f f f . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d d c b c d d f . 
                . f f f f f f f f f . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d c b c d d d f . 
                . f f f f f f f f f . 
                `],
            500,
            true
            )
        } else if (ElementalMetal.vy > 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f d f . 
                . . . . . . . . f . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f d f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        } else if (ElementalMetal.vx < 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f f 1 d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f d f . 
                . . . . . . . . f . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f d f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        } else if (ElementalMetal.vx > 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d 1 f f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f d f . 
                . . . . . . . . f . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f d f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        }
    }
}
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    Trixie2()
})
sprites.onOverlap(SpriteKind.Player3, SpriteKind.Babosa, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_P3) {
        Inventario_P3.push(otherSprite)
    }
})
sprites.onOverlap(SpriteKind.Player4, SpriteKind.Elementalagua, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_p4) {
        Inventario_p4.push(otherSprite)
    }
})
function Zane_se_detiene_en_la_derecha () {
    Kord.setVelocity(0, 0)
    animation.runImageAnimation(
    Kord,
    [img`
        ...............fff.....
        ...............fddf....
        ...............fdddf...
        ...............fddddf..
        ...............fddddf..
        ...............fddddf..
        ..ffffffffffffffddddfff
        .ffccccf4444444fddddfcf
        .fcccccf444444fdddddfcf
        .fccccccff444fdddddfccf
        .fccccccccfffffffffcccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccffffffffffffccf
        .fccccff699999999999fcf
        .fcccf6669dddd999ddddff
        .ffff6666911ff999ff119f
        .f6666666911ff999ff119f
        .f66666669999999999999f
        .f666666699999fff99999f
        .f66666669999999999999f
        fffffffffffffffffffffff
        f9966fcccbb111b6ccf69f.
        f4cccfaacbb1b6aac6fc4f.
        f9c9cfaacb6b11aac6f9cf.
        ffffffffffffffffffffff.
        .....fbbbbcccfbbbcf....
        .....fbbbbcccfbbbcf....
        .....ffffffffffffff....
        `,img`
        ...............fff.....
        ...............fddf....
        ...............fdddf...
        ...............fddddf..
        ...............fddddf..
        ...............fddddf..
        ..ffffffffffffffddddfff
        .ffccccf4444444fddddfcf
        .fcccccf444444fdddddfcf
        .fccccccff444fdddddfccf
        .fccccccccfffffffffcccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccffffffffffffccf
        .fccccff699999999999fcf
        .fcccf6669dddd999ddddff
        .ffff66669666699966669f
        .f66666669666699966669f
        .f66666669999999999999f
        .f666666699999fff99999f
        .f66666669999999999999f
        fffffffffffffffffffffff
        f9966fcccbb111b6ccf69f.
        f4cccfaacbb1b6aac6fc4f.
        f9c9cfaacb6b11aac6f9cf.
        ffffffffffffffffffffff.
        .....fbbbbcccfbbbcf....
        .....fbbbbcccfbbbcf....
        .....ffffffffffffff....
        `,img`
        ...............fff.....
        ...............fddf....
        ...............fdddf...
        ...............fddddf..
        ...............fddddf..
        ...............fddddf..
        ..ffffffffffffffddddfff
        .ffccccf4444444fddddfcf
        .fcccccf444444fdddddfcf
        .fccccccff444fdddddfccf
        .fccccccccfffffffffcccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccffffffffffffccf
        .fccccff699999999999fcf
        .fcccf6669dddd999ddddff
        .ffff6666911ff999ff119f
        .f6666666911ff999ff119f
        .f66666669999999999999f
        .f666666699999fff99999f
        .f66666669999999999999f
        fffffffffffffffffffffff
        f9966fcccbb111b6ccf69f.
        f4cccfaacbb1b6aac6fc4f.
        f9c9cfaacb6b11aac6f9cf.
        ffffffffffffffffffffff.
        .....fbbbbcccfbbbcf....
        .....fbbbbcccfbbbcf....
        .....ffffffffffffff....
        `],
    500,
    true
    )
}
function CETBT () {
    if (spriteutils.distanceBetween(Trixie, Elemental_de_tierra2) < 2) {
        Elemental_de_tierra2.follow(Trixie, -5)
        Elemental_de_tierra2.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Trixie, Elemental_de_tierra2) > 0) {
        Elemental_de_tierra2.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_de_tierra2.vy < 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d d b c b d d f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d d d b c b d f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d d b c b d d f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d b c b d d d f . . 
                . . f f f f f f f f f . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_tierra2.vy > 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f d f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f d f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_tierra2.vx < 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f f 1 d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f d f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f d f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_tierra2.vx > 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d 1 f f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f d f f f f f f f . . 
                . . . f . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f d f . . 
                . . . . . . . . . f . . . 
                `],
            500,
            true
            )
        }
    }
}
sprites.onOverlap(SpriteKind.Player4, SpriteKind.Elemental_De_Metal, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_p4) {
        Inventario_p4.push(otherSprite)
    }
})
function Zane_se_detiene_arriba () {
    Kord.setVelocity(0, 0)
    animation.runImageAnimation(
    Kord,
    [img`
        ...........ff..........
        ..........fddf.........
        .........fddddf........
        .........fdbbdf........
        .........fdbbdf........
        .........fbbbbf........
        ..ffffffffffffffffffff.
        .ffcccccf444444fcccccff
        .fcccccccf4444fcccccccf
        .fccccccccffffccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .ffffcccccccccccccfffff
        .f666ffffffffffffff666f
        .f66666666666666666666f
        .f99966666666666666999f
        .f99999999999999999999f
        .ffffffffffffffffffffff
        ..f96fccccccccccccf69f.
        ..f4cf6cccccccccccfc4f.
        ..fc9f6bbbbbbbb6b6f9cf.
        ..ffffffffffffffffffff.
        .....fcccbbbbfcbbbf....
        .....fcccbbbbfcbbbf....
        .....ffffffffffffff....
        `],
    100,
    false
    )
}
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    TCI()
})
function CETBK () {
    if (spriteutils.distanceBetween(Kord, Elemental_de_tierra2) < 2) {
        Elemental_de_tierra2.follow(Kord, -5)
        Elemental_de_tierra2.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Kord, Elemental_de_tierra2) > 0) {
        Elemental_de_tierra2.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_de_tierra2.vy < 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d d b c b d d f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d d d b c b d f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d d b c b d d f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d d d d d d d f f . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . f d d d d d d d f . . 
                . . . f d d d d d f . . . 
                . . f d d d d d d d f . . 
                . . f d d d b d d d f . . 
                . . . f d b b b d f . . . 
                . . f d b c b d d d f . . 
                . . f f f f f f f f f . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_tierra2.vy > 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f d f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f d f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_tierra2.vx < 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f f 1 d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f d f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f d f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_tierra2.vx > 0) {
            animation.runImageAnimation(
            Elemental_de_tierra2,
            [img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d 1 f f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f d f f f f f f f . . 
                . . . f . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 4 c f . . . f c 4 f . 
                f d c f . . . . . f d d f 
                f d d c f . . . f c d d f 
                . f d d c f f f c d d f . 
                f d f d d d d d d d f d f 
                . f f d c d c d c d f f . 
                . . f d d d c d d d f . . 
                . . f 1 f d d d f 1 f . . 
                . . f 4 4 f f f 4 4 f . . 
                . . . f d 4 4 4 d f . . . 
                . . f d d e e e d d f . . 
                . . f d d e e e d d f . . 
                . . . f d e e e d f . . . 
                . . f d e e e e e d f . . 
                . . f f f f f f f d f . . 
                . . . . . . . . . f . . . 
                `],
            500,
            true
            )
        }
    }
}
controller.player3.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Zane_camina_hacia_abajo()
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    ACD()
})
function Eli_2 () {
    sprites.destroy(Eli_Shane)
}
function Inventario3 () {
    Inventario_P3 = []
    Seleccion3 = 0
}
function Tdi () {
    Trixie.setVelocity(0, 0)
    animation.runImageAnimation(
    Trixie,
    [img`
        .fffffffffffffffffffffffffffff.
        f44e3f44444444444444eeeeef3e44f
        f44e3f44444444444444eeeeef3e44f
        f44e3f44444444444444eeeeef3e44f
        f44e3f444444444ff44feeeeef3e44f
        f44e3f44fff444fddf44feeeef3e44f
        f44e3f44fddf44fdddf44feeef3e44f
        .f4e3fffddddf4fddddf44feef3e4f.
        ..ffffdddddddffddddffffeeffff..
        .....fddddddddddddddfeeeef.....
        .....fd4444ddd4444ddbfeeef.....
        .....fd1177ddd7711ddbfeeef.....
        .....fd117fdddf711ddbbfeff.....
        .....fddddddddddddddbbbfbf.....
        .....fdddddfffddddddbbbbbf.....
        .....fddddddddddddddbbbbbf.....
        .....fffffffffffffffffffff.....
        ......fd7f6677ccc77c4fd7df.....
        ......f77f667777777ccf677f.....
        ......fd7fccbbbbbbbbbf67df.....
        ......ffffffffffffffffffff.....
        .........fccbbfccbbbbf.........
        .........fccbbfccbbbbf.........
        .........fffffffffffff.........
        `,img`
        .fffffffffffffffffffffffffffff.
        f44e3f44444444444444eeeeef3e44f
        f44e3f44444444444444eeeeef3e44f
        f44e3f44444444444444eeeeef3e44f
        f44e3f444444444ff44feeeeef3e44f
        f44e3f44fff444fddf44feeeef3e44f
        f44e3f44fddf44fdddf44feeef3e44f
        .f4e3fffddddf4fddddf44feef3e4f.
        ..ffffdddddddffddddffffeeffff..
        .....fddddddddddddddfeeeef.....
        .....fd4444ddd4444ddbfeeef.....
        .....fdbbbbdddbbbbddbfeeef.....
        .....fdbbbbdddbbbbddbbfeff.....
        .....fddddddddddddddbbbfbf.....
        .....fdddddfffddddddbbbbbf.....
        .....fddddddddddddddbbbbbf.....
        .....fffffffffffffffffffff.....
        ......fd7f6677ccc77c4fd7df.....
        ......f77f667777777ccf677f.....
        ......fd7fccbbbbbbbbbf67df.....
        ......ffffffffffffffffffff.....
        .........fccbbfccbbbbf.........
        .........fccbbfccbbbbf.........
        .........fffffffffffff.........
        `,img`
        .fffffffffffffffffffffffffffff.
        f44e3f44444444444444eeeeef3e44f
        f44e3f44444444444444eeeeef3e44f
        f44e3f44444444444444eeeeef3e44f
        f44e3f444444444ff44feeeeef3e44f
        f44e3f44fff444fddf44feeeef3e44f
        f44e3f44fddf44fdddf44feeef3e44f
        .f4e3fffddddf4fddddf44feef3e4f.
        ..ffffdddddddffddddffffeeffff..
        .....fddddddddddddddfeeeef.....
        .....fd4444ddd4444ddbfeeef.....
        .....fd1177ddd7711ddbfeeef.....
        .....fd117fdddf711ddbbfeff.....
        .....fddddddddddddddbbbfbf.....
        .....fdddddfffddddddbbbbbf.....
        .....fddddddddddddddbbbbbf.....
        .....fffffffffffffffffffff.....
        ......fd7f6677ccc77c4fd7df.....
        ......f77f667777777ccf677f.....
        ......fd7fccbbbbbbbbbf67df.....
        ......ffffffffffffffffffff.....
        .........fccbbfccbbbbf.........
        .........fccbbfccbbbbf.........
        .........fffffffffffff.........
        `],
    500,
    true
    )
}
controller.player4.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    Pronto.setVelocity(-30, 0)
    animation.runImageAnimation(
    Pronto,
    [img`
        .fffffffffffffffffff...
        .f555555555555554444f..
        .f5fffffffffff5544444f.
        .ffbbbbbbbbbbbff44224f.
        .fdddddddddddbbf44224f.
        .fdddddddddddbbff4444f.
        .fddddddddddddbbbfffff.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fdffffdddffffddbbbbbf.
        .fd11ffdddff11ddbbbbbf.
        .fd11ffdddff11ddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .ffffffffffffffffffffff
        ..f11fcceeeeeecccf1111f
        ..f99f9c11ee11cc9f9999f
        ..fccf1c999999cc1fccccf
        ..fffffffffffffffffffff
        .....f7766f777766f.....
        .....f7766f777766f.....
        .....fffffffffffff.....
        `,img`
        .fffffffffffffffffff...
        .f555555555555554444f..
        .f5fffffffffff5544444f.
        .ffbbbbbbbbbbbff44224f.
        .fdddddddddddbbf44224f.
        .fdddddddddddbbff4444f.
        .fddddddddddddbbbfffff.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fdffffdddffffddbbbbbf.
        .fd11ffdddff11ddbbbbbf.
        .fd11ffdddff11ddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        ffffffffffffffffffffff.
        f1111fcceeeeeecccf11f..
        f9999f9c11ee11cc9f99f..
        fccccf1c999999cc1fccf..
        fffffffffffffffffffff..
        .....f6677f667777f.....
        .....f6677f667777f.....
        .....fffffffffffff.....
        `,img`
        .fffffffffffffffffff...
        .f555555555555554444f..
        .f5fffffffffff5544444f.
        .ffbbbbbbbbbbbff44224f.
        .fdddddddddddbbf44224f.
        .fdddddddddddbbff4444f.
        .fddddddddddddbbbfffff.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fdffffdddffffddbbbbbf.
        .fd11ffdddff11ddbbbbbf.
        .fd11ffdddff11ddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .ffffffffffffffffffffff
        ..f11fcceeeeeecccf1111f
        ..f99f9c11ee11cc9f9999f
        ..fccf1c999999cc1fccccf
        ..fffffffffffffffffffff
        .....f7766f777766f.....
        .....f7766f777766f.....
        .....fffffffffffff.....
        `,img`
        .fffffffffffffffffff...
        .f555555555555554444f..
        .f5fffffffffff5544444f.
        .ffbbbbbbbbbbbff44224f.
        .fdddddddddddbbf44224f.
        .fdddddddddddbbff4444f.
        .fddddddddddddbbbfffff.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        .fdffffdddffffddbbbbbf.
        .fd11ffdddff11ddbbbbbf.
        .fd11ffdddff11ddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddd333ddddddbbbbbf.
        .fddddddddddddddbbbbbf.
        ffffffffffffffffffffff.
        f1111fcceeeeeecccf11f..
        f9999f9c11ee11cc9f99f..
        fccccf1c999999cc1fccf..
        fffffffffffffffffffff..
        .....f6677f667777f.....
        .....f6677f667777f.....
        .....fffffffffffff.....
        `],
    500,
    true
    )
})
function CEPB () {
    CEPBE()
    CEPBT()
    CEPBK()
    CEPBP()
}
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Babosa, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_p2) {
        Inventario_p2.push(otherSprite)
    }
})
function Elemental_de_tierra () {
    Elemental_de_tierra2 = sprites.create(img`
        . . f f . . . . . f f . . 
        . f 4 c f . . . f c 4 f . 
        f d c f . . . . . f d d f 
        f d d c f . . . f c d d f 
        . f d d c f f f c d d f . 
        . . f d d d d d d d f . . 
        . . f d c d c d c d f . . 
        . . f d d d c d d d f . . 
        . . f 1 f d d d f 1 f . . 
        . . f 4 4 f f f 4 4 f . . 
        . . . f d 4 4 4 d f . . . 
        . . f d d e e e d d f . . 
        . . f d d e e e d d f . . 
        . . . f d e e e d f . . . 
        . . f d e e e e e d f . . 
        . . f f f f f f f f f . . 
        `, SpriteKind.ElementalTierra)
    Elemental_de_tierra2.setPosition(90, 150)
}
function Inventario2 () {
    Inventario_p2 = []
    Seleccion2 = 0
}
function zane () {
    Kord = sprites.create(img`
        ...............fff.....
        ...............fddf....
        ...............fdddf...
        ...............fddddf..
        ...............fddddf..
        ...............fddddf..
        ..ffffffffffffffddddfff
        .ffccccf4444444fddddfcf
        .fcccccf444444fdddddfcf
        .fccccccff444fdddddfccf
        .fccccccccfffffffffcccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccffffffffffffccf
        .fccccff699999999999fcf
        .fcccf6669dddd999ddddff
        .ffff6666911ff999ff119f
        .f6666666911ff999ff119f
        .f66666669999999999999f
        .f666666699999fff99999f
        .f66666669999999999999f
        fffffffffffffffffffffff
        f9966fcccbb111b6ccf69f.
        f4cccfaacbb1b6aac6fc4f.
        f9c9cfaacb6b11aac6f9cf.
        ffffffffffffffffffffff.
        .....fcccbbbbfcbbbf....
        .....fcccbbbbfcbbbf....
        .....ffffffffffffff....
        `, SpriteKind.Player3)
    info.player3.setScore(0)
    info.player3.setLife(7)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, Kord)
}
function CEMBK () {
    if (spriteutils.distanceBetween(Kord, ElementalMetal) < 2) {
        ElementalMetal.follow(Kord, -5)
        ElementalMetal.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Kord, ElementalMetal) > 0) {
        ElementalMetal.setVelocity(randint(-10, 10), randint(-10, 10))
        if (ElementalMetal.vy < 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d d c b c d d f . 
                . f f f f f f f f f . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d d d c b c d f . 
                . f f f f f f f f f . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d d c b c d d f . 
                . f f f f f f f f f . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f d d d b d d d f . 
                . f d d d d d d d f . 
                . f d d d b d d d f . 
                . . f d d b d d f . . 
                . f d d d b d d d f . 
                . f d d d c d d d f . 
                . . f d c b c d f . . 
                . f d c b c d d d f . 
                . f f f f f f f f f . 
                `],
            500,
            true
            )
        } else if (ElementalMetal.vy > 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f d f . 
                . . . . . . . . f . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f d f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        } else if (ElementalMetal.vx < 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f f 1 d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f d f . 
                . . . . . . . . f . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f d f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        } else if (ElementalMetal.vx > 0) {
            animation.runImageAnimation(
            ElementalMetal,
            [img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d 1 f f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f d f . 
                . . . . . . . . f . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . f . . . . . . . f . 
                f d f . . f . . f d f 
                f d d f f b f f d d f 
                f d d d f b f d d d f 
                . f d b d b d b d f . 
                . f d b d b d b d f . 
                . f d d d b d d d f . 
                . f 1 f d d d f 1 f . 
                . f d b f f f b d f . 
                . . f d b b b d f . . 
                . f d d b b b d d f . 
                . f d d b b b d d f . 
                . . f d b b b d f . . 
                . f d b b b b b d f . 
                . f d f f f f f f f . 
                . . f . . . . . . . . 
                `],
            500,
            true
            )
        }
    }
}
function CEHBT () {
    if (spriteutils.distanceBetween(Trixie, Elemental_de_hielo2) < 2) {
        Elemental_de_hielo2.follow(Trixie, -5)
        Elemental_de_hielo2.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Trixie, Elemental_de_hielo2) > 0) {
        Elemental_de_hielo2.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_de_hielo2.vy < 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 1 9 6 9 1 1 f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 1 1 9 6 9 1 f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 1 9 6 9 1 1 f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 9 6 9 1 1 1 f . . 
                . . f f f f f f f f f . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_hielo2.vy > 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f 1 f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_hielo2.vx < 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f 1 f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_hielo2.vx > 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 f f f f f f f . . 
                . . . f . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f 1 f . . 
                . . . . . . . . . f . . . 
                `],
            500,
            true
            )
        }
    }
}
function Inventario1 () {
    inventario_P1 = []
    Seleccion_1 = 0
}
function Pronto3 () {
    sprites.destroy(Pronto)
}
function CEABT () {
    if (spriteutils.distanceBetween(Trixie, Elemental_de_agua) < 2) {
        Elemental_de_agua.follow(Trixie, -5)
        Elemental_de_agua.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Trixie, Elemental_de_agua) > 0) {
        Elemental_de_agua.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_de_agua.vy < 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 6 9 6 9 6 6 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 6 6 9 6 9 6 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 6 9 6 9 6 6 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 9 6 9 6 6 6 f . 
                . f f f f f f f f f . 
                `],
            500,
            true
            )
        } else if (Elemental_de_agua.vy > 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 f 1 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 6 6 9 9 9 6 6 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 1 f 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_agua.vx < 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 f 1 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 6 6 9 9 9 6 6 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 f 1 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . . f 6 9 9 9 6 6 f . 
                . . f 6 f f f f f f . 
                . . . f . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_agua.vx > 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 1 f 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 6 6 9 9 9 6 6 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . . f 6 9 9 9 6 6 f . 
                . . f 6 f f f f f f . 
                . . . f . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 1 f 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `],
            500,
            true
            )
        }
    }
}
function Zane2 () {
    sprites.destroy(Kord)
}
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    TDD()
})
sprites.onOverlap(SpriteKind.Player4, SpriteKind.Elementalhielo, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Inventario_p4) {
        Inventario_p4.push(otherSprite)
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    Trxie()
})
function Zane_camina_hacia_arriba () {
    Kord.setVelocity(0, -80)
    animation.runImageAnimation(
    Kord,
    [img`
        ...........ff..........
        ..........fddf.........
        .........fddddf........
        .........fdbbdf........
        .........fdbbdf........
        .........fbbbbf........
        ..ffffffffffffffffffff.
        .ffcccccf444444fcccccff
        .fcccccccf4444fcccccccf
        .fccccccccffffccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .ffffcccccccccccccfffff
        .f666ffffffffffffff666f
        .f66666666666666666666f
        .f99966666666666666999f
        .f99999999999999999999f
        fffffffffffffffffffffff
        f9966fccccccccccccf69f.
        f4cccf6cccccccccccfc4f.
        fc9c9f6bbbbbbbb6b6f9cf.
        ffffffffffffffffffffff.
        .....fcccbbbbfcbbbf....
        .....fcccbbbbfcbbbf....
        .....ffffffffffffff....
        `,img`
        ...........ff..........
        ..........fddf.........
        .........fddddf........
        .........fdbbdf........
        .........fdbbdf........
        .........fbbbbf........
        ..ffffffffffffffffffff.
        .ffcccccf444444fcccccff
        .fcccccccf4444fcccccccf
        .fccccccccffffccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .fccccccccccccccccccccf
        .ffffcccccccccccccfffff
        .f666ffffffffffffff666f
        .f66666666666666666666f
        .f99966666666666666999f
        .f99999999999999999999f
        .ffffffffffffffffffffff
        ..f96fccccccccccccf69f.
        ..f4cf6cccccccccccfc4f.
        ..fc9f6bbbbbbbb6b6f9cf.
        ..ffffffffffffffffffff.
        .....fcccbbbbfcbbbf....
        .....fcccbbbbfcbbbf....
        .....ffffffffffffff....
        `,img`
        ..........ff...........
        .........fddf..........
        ........fddddf.........
        ........fdbbdf.........
        ........fdbbdf.........
        ........fbbbbf.........
        .ffffffffffffffffffff..
        ffcccccf444444fcccccff.
        fcccccccf4444fcccccccf.
        fccccccccffffccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fccccccccccccccccccccf.
        fffffcccccccccccccffff.
        f666ffffffffffffff666f.
        f66666666666666666666f.
        f99966666666666666999f.
        f99999999999999999999f.
        fffffffffffffffffffffff
        .f96fccccccccccccf6699f
        .f4cfccccccccccc6fccc4f
        .fc9f6b6bbbbbbbb6f9c9cf
        .ffffffffffffffffffffff
        ....fbbbcfbbbbcccf.....
        ....fbbbcfbbbbcccf.....
        ....ffffffffffffff.....
        `],
    100,
    true
    )
}
function Doc () {
    let mySprite: Sprite = null
    Elemental_energia = sprites.create(img`
        . . f . . . f . . 
        . f 6 f . f 6 f . 
        . f 6 f f f 6 f . 
        f 6 6 6 6 6 6 6 f 
        f 6 7 7 7 7 7 6 f 
        f 6 7 1 f 1 7 6 f 
        f 6 7 7 7 7 7 6 f 
        f 6 7 f f f 7 6 f 
        . f 7 7 7 7 7 f . 
        f 6 6 7 7 7 6 6 f 
        f 6 6 7 7 7 6 6 f 
        . f 6 7 7 7 6 f . 
        f 6 6 7 7 7 6 6 f 
        f f f f f f f f f 
        `, SpriteKind.Elemental_enerigia)
    mySprite.setPosition(40, 50)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ElementalTierra, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (inventario_P1) {
        inventario_P1.push(otherSprite)
    }
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    game.showLongText(inventario_P1, DialogLayout.Left)
})
function CETB () {
    CETBE()
    CETBT()
    CETBK()
    CETBP()
}
function TCI () {
    Trixie.setVelocity(-50, 0)
    animation.runImageAnimation(
    Trixie,
    [img`
        .fffffffffffffffffffffffffffff.
        f44e3f44444444444444eeeeef3e44f
        f44e3f44444444444444eeeeef3e44f
        f44e3f44444444444444eeeeef3e44f
        f44e3f444444444ff44feeeeef3e44f
        f44e3f44fff444fddf44feeeef3e44f
        f44e3f44fddf44fdddf44feeef3e44f
        .f4e3fffddddf4fddddf44feef3e4f.
        ..ffffdddddddffddddffffeeffff..
        .....fddddddddddddddfeeeef.....
        .....fd4444ddd4444ddbfeeef.....
        .....fd1177ddd7711ddbfeeef.....
        .....fd117fdddf711ddbbfeff.....
        .....fddddddddddddddbbbfbf.....
        .....fdddddfffddddddbbbbbf.....
        .....fddddddddddddddbbbbbf.....
        .....fffffffffffffffffffff.....
        ......fd7f667ccc777c4f677f.....
        ......f77f667777777ccf67df.....
        ......fd7fccbbbbbbbbbfffff.....
        ......ffffffffffffffff.........
        .........fbbccfbbbbccf.........
        .........fbbccfbbbbccf.........
        .........fffffffffffff.........
        `,img`
        .fffffffffffffffffffffffffffff.
        f44e3f44444444444444eeeeef3e44f
        f44e3f44444444444444eeeeef3e44f
        f44e3f44444444444444eeeeef3e44f
        f44e3f444444444ff44feeeeef3e44f
        f44e3f44fff444fddf44feeeef3e44f
        f44e3f44fddf44fdddf44feeef3e44f
        .f4e3fffddddf4fddddf44feef3e4f.
        ..ffffdddddddffddddffffeeffff..
        .....fddddddddddddddfeeeef.....
        .....fd4444ddd4444ddbfeeef.....
        .....fd1177ddd7711ddbfeeef.....
        .....fd117fdddf711ddbbfeff.....
        .....fddddddddddddddbbbfbf.....
        .....fdddddfffddddddbbbbbf.....
        .....fddddddddddddddbbbbbf.....
        .....fffffffffffffffffffff.....
        ......fd7f6677ccc77c4fd7df.....
        ......f77f667777777ccf677f.....
        ......fd7fccbbbbbbbbbf67df.....
        ......ffffffffffffffffffff.....
        .........fccbbfccbbbbf.........
        .........fccbbfccbbbbf.........
        .........fffffffffffff.........
        `,img`
        .fffffffffffffffffffffffffffff.
        f44e3f44444444444444eeeeef3e44f
        f44e3f44444444444444eeeeef3e44f
        f44e3f44444444444444eeeeef3e44f
        f44e3f444444444ff44feeeeef3e44f
        f44e3f44fff444fddf44feeeef3e44f
        f44e3f44fddf44fdddf44feeef3e44f
        .f4e3fffddddf4fddddf44feef3e4f.
        ..ffffdddddddffddddffffeeffff..
        .....fddddddddddddddfeeeef.....
        .....fd4444ddd4444ddbfeeef.....
        .....fd1177ddd7711ddbfeeef.....
        .....fd117fdddf711ddbbfeff.....
        .....fddddddddddddddbbbfbf.....
        .....fdddddfffddddddbbbbbf.....
        .....fddddddddddddddbbbbbf.....
        .....fffffffffffffffffffff.....
        ......f77f667ccc777c4fd7df.....
        ......fd7f667777777ccf677f.....
        ......ffffccbbbbbbbbbf67df.....
        .........fffffffffffffffff.....
        .........fccbbfccbbbbf.........
        .........fccbbfccbbbbf.........
        .........fffffffffffff.........
        `],
    200,
    true
    )
}
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    EDC()
})
function CEHBP () {
    if (spriteutils.distanceBetween(Pronto, Elemental_de_hielo2) < 2) {
        Elemental_de_hielo2.follow(Pronto, -5)
        Elemental_de_hielo2.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Pronto, Elemental_de_hielo2) > 0) {
        Elemental_de_hielo2.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_de_hielo2.vy < 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 1 9 6 9 1 1 f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 1 1 9 6 9 1 f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 1 9 6 9 1 1 f . . 
                . . f f f f f f f f f . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 1 1 1 6 6 f 9 f 
                . f f 6 1 1 1 1 1 6 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 1 1 9 1 1 1 f . . 
                . . . f 1 9 9 9 1 f . . . 
                . . f 1 9 6 9 1 1 1 f . . 
                . . f f f f f f f f f . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_hielo2.vy > 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f 1 f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_hielo2.vx < 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f 1 f . . 
                . . . . . . . . . f . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 f f f f f f f . . 
                . . . f . . . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_hielo2.vx > 0) {
            animation.runImageAnimation(
            Elemental_de_hielo2,
            [img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 f f f f f f f . . 
                . . . f . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f f f . . 
                . . . . . . . . . . . . . 
                `,img`
                . . f f . . . . . f f . . 
                . f 6 6 f . . . f 6 6 f . 
                f 6 6 f . . . . . f 6 6 f 
                f 6 6 6 f . . . f 6 6 6 f 
                . f 6 6 6 f f f 6 6 6 f . 
                f 9 f 6 6 6 6 6 6 6 f 9 f 
                . f f 1 6 6 d 6 6 1 f f . 
                . . f 1 1 1 1 1 1 1 f . . 
                . . f 1 9 1 9 1 9 1 f . . 
                . . f 9 9 f f f 9 9 f . . 
                . . . f 9 9 9 9 9 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f 1 1 9 1 9 1 1 f . . 
                . . . f 1 9 1 9 1 f . . . 
                . . f 1 1 9 9 9 1 1 f . . 
                . . f f f f f f f 1 f . . 
                . . . . . . . . . f . . . 
                `],
            500,
            true
            )
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Elementalhielo, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (inventario_P1) {
        inventario_P1.push(otherSprite)
    }
})
function CEABE () {
    if (spriteutils.distanceBetween(Eli_Shane, Elemental_de_agua) < 2) {
        Elemental_de_agua.follow(Eli_Shane, -5)
        Elemental_de_agua.setBounceOnWall(true)
    } else if (spriteutils.distanceBetween(Eli_Shane, Elemental_de_agua) > 0) {
        Elemental_de_agua.setVelocity(randint(-10, 10), randint(-10, 10))
        if (Elemental_de_agua.vy < 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 6 9 6 9 6 6 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 6 6 9 6 9 6 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 6 9 6 9 6 6 f . 
                . f f f f f f f f f . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 6 f . f f . 
                . f d f 6 6 6 f d f . 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 f . . 
                . f 6 6 6 9 6 6 6 f . 
                . f 6 6 9 9 9 6 6 f . 
                . . f 6 9 9 9 6 f . . 
                . f 6 9 6 9 6 6 6 f . 
                . f f f f f f f f f . 
                `],
            500,
            true
            )
        } else if (Elemental_de_agua.vy > 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 f 1 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 6 6 9 9 9 6 6 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 1 f 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_agua.vx < 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 f 1 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 6 6 9 9 9 6 6 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 f 1 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . . f 6 9 9 9 6 6 f . 
                . . f 6 f f f f f f . 
                . . . f . . . . . . . 
                `],
            500,
            true
            )
        } else if (Elemental_de_agua.vx > 0) {
            animation.runImageAnimation(
            Elemental_de_agua,
            [img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 1 f 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 6 6 9 9 9 6 6 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . . f 6 9 9 9 6 6 f . 
                . . f 6 f f f f f f . 
                . . . f . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 1 f 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f f f f f f f f f . 
                . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . 
                . f f . f 9 f . f f . 
                . f d f 9 9 9 f d f . 
                . f 6 d 6 9 6 d 6 f . 
                f 6 6 6 6 6 6 6 6 6 f 
                . f 9 6 6 1 6 6 9 f . 
                f 9 1 f 9 9 9 f 1 9 f 
                . f 9 9 f f f 9 9 f . 
                . . f 9 9 9 9 9 f . . 
                . f 6 6 9 9 9 6 6 f . 
                . f 6 9 6 9 6 9 6 f . 
                . . f 6 9 6 9 6 f . . 
                . f 6 6 9 9 9 6 f . . 
                . f f f f f f 6 f . . 
                . . . . . . . f . . . 
                `],
            500,
            true
            )
        }
    }
}
function Elemental_de_agua_Buena () {
    Elemental_de_agua = sprites.create(img`
        . . . . f f f . . . . 
        . f f . f 9 f . f f . 
        . f d f 9 9 9 f d f . 
        . f 6 d 6 9 6 d 6 f . 
        f 9 6 6 6 6 6 6 6 9 f 
        . f 9 6 6 1 6 6 9 f . 
        f 6 1 f 9 9 9 f 1 6 f 
        . f 9 9 f f f 9 9 f . 
        . . f 9 9 9 9 9 f . . 
        . f 6 6 9 9 9 6 6 f . 
        . f 6 9 6 9 6 9 6 f . 
        . . f 6 9 6 9 6 f . . 
        . f 6 6 9 9 9 6 6 f . 
        . f f f f f f f f f . 
        `, SpriteKind.Elementalagua)
    Elemental_de_agua.setPosition(250, 30)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Babosa, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (inventario_P1) {
        inventario_P1.push(otherSprite)
    }
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    Eli()
})
controller.player4.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    Pronto.setVelocity(30, 0)
    animation.runImageAnimation(
    Pronto,
    [img`
        ...fffffffffffffffffff.
        ..f444455555555555555f.
        .f4444455fffffffffff5f.
        .f42244ffbbbbbbbbbbbff.
        .f42244fbbdddddddddddf.
        .f4444ffbbdddddddddddf.
        .fffffbbbddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddffffdddffffdf.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdddddd333dddddf.
        .fbbbbbdddddd333dddddf.
        .fbbbbbddddddddddddddf.
        ffffffffffffffffffffff.
        f1111fccceeeeeeccf11f..
        f9999f9cc11ee11c9f99f..
        fccccf1cc999999c1fccf..
        fffffffffffffffffffff..
        .....f667777f6677f.....
        .....f667777f6677f.....
        .....fffffffffffff.....
        `,img`
        ...fffffffffffffffffff.
        ..f444455555555555555f.
        .f4444455fffffffffff5f.
        .f42244ffbbbbbbbbbbbff.
        .f42244fbbdddddddddddf.
        .f4444ffbbdddddddddddf.
        .fffffbbbddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddffffdddffffdf.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdddddd333dddddf.
        .fbbbbbdddddd333dddddf.
        .fbbbbbddddddddddddddf.
        .ffffffffffffffffffffff
        ..f11fccceeeeeeccf1111f
        ..f99f9cc11ee11c9f9999f
        ..fccf1cc999999c1fccccf
        ..fffffffffffffffffffff
        .....f777766f7766f.....
        .....f777766f7766f.....
        .....fffffffffffff.....
        `,img`
        ...fffffffffffffffffff.
        ..f444455555555555555f.
        .f4444455fffffffffff5f.
        .f42244ffbbbbbbbbbbbff.
        .f42244fbbdddddddddddf.
        .f4444ffbbdddddddddddf.
        .fffffbbbddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddffffdddffffdf.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdddddd333dddddf.
        .fbbbbbdddddd333dddddf.
        .fbbbbbddddddddddddddf.
        ffffffffffffffffffffff.
        f1111fccceeeeeeccf11f..
        f9999f9cc11ee11c9f99f..
        fccccf1cc999999c1fccf..
        fffffffffffffffffffff..
        .....f667777f6677f.....
        .....f667777f6677f.....
        .....fffffffffffff.....
        `,img`
        ...fffffffffffffffffff.
        ..f444455555555555555f.
        .f4444455fffffffffff5f.
        .f42244ffbbbbbbbbbbbff.
        .f42244fbbdddddddddddf.
        .f4444ffbbdddddddddddf.
        .fffffbbbddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddddddddddddddf.
        .fbbbbbddffffdddffffdf.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdd11ffdddff11df.
        .fbbbbbdddddd333dddddf.
        .fbbbbbdddddd333dddddf.
        .fbbbbbddddddddddddddf.
        .ffffffffffffffffffffff
        ..f11fccceeeeeeccf1111f
        ..f99f9cc11ee11c9f9999f
        ..fccf1cc999999c1fccccf
        ..fffffffffffffffffffff
        .....f777766f7766f.....
        .....f777766f7766f.....
        .....fffffffffffff.....
        `],
    500,
    true
    )
})
controller.player3.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    Zane_camina_a_la_izquierda()
})
controller.player3.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Zane_camina_hacia_arriba()
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    ECI()
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    ECAB()
})
let Elemental_energia: Sprite = null
let Seleccion_1 = 0
let Seleccion2 = 0
let Seleccion3 = 0
let Seleccion4 = 0
let Elemental_de_agua: Sprite = null
let ElementalMetal: Sprite = null
let Elemental_planta: Sprite = null
let Inventario_p4: Sprite[] = []
let Eli_Shane: Sprite = null
let Trixie: Sprite = null
let Inventario_p2: Sprite[] = []
let Kord: Sprite = null
let Inventario_P3: Sprite[] = []
let Elemental_de_tierra2: Sprite = null
let Elemental_de_hielo2: Sprite = null
let inventario_P1: Sprite[] = []
let Pronto: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Elemental_de_agua_Buena()
Elemental_de_hielo()
Elemental_de_tierra()
ElementalMetal2()
ElementalPlanta()
game.onUpdateInterval(500, function () {
    CEAB()
    CEHB()
    CETB()
    CEMB()
    CEPB()
})
