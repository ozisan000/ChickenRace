let checkPos = world(-2, -59, 15)
blocks.place(AIR, checkPos)
let end = 16
let isStop = false
let speed = 0.4
let move = 0.0
let title = "title @a title "
agent.teleport(world(0, -60, 0), SOUTH)
player.execute(title + "ゲーム開始")
loops.pause(1000)
while (true) {
    if (end <= move) {
        agent.teleport(world(0, -61, move), SOUTH)
        break
    } else if (blocks.testForBlock(REDSTONE_BLOCK, checkPos)) {
        isStop = true
        break
    }
    
    loops.pause(1)
    move = move + speed
    agent.teleport(world(0, -60, move), SOUTH)
}
if (isStop) {
    player.execute(title + "残り:" + Math.roundWithPrecision(end - move, 2) + "m!")
} else {
    player.execute(title + "GameOver!")
}

