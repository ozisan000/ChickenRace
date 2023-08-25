checkPos = world(-2, -59, 15)
blocks.place(AIR, checkPos)
end = 16
isStop = False
speed = 0.4
move = 0.0
title = "title @a title "

agent.teleport(world(0, -60, 0), SOUTH)

player.execute(title + "ゲーム開始")
loops.pause(1000)

while True:
    if end <= move :
        agent.teleport(world(0 ,-61 ,move) , SOUTH)
        break
    elif blocks.test_for_block(REDSTONE_BLOCK, checkPos):
        isStop = True
        break
    loops.pause(1)
    move = move + speed
    agent.teleport(world(0 ,-60 ,move), SOUTH)

if isStop:
    player.execute(title + "残り:" + Math.round_with_precision(end - move , 2) + "m!")
else:
    player.execute(title + "GameOver!")