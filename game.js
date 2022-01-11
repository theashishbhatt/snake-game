// need to setup game loop that does calculations to update renders based on set times

import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection} from "./snake.js"
import { update as updateFood, draw as drawFood, } from "./food.js"

import {outsideGrid} from "./grid.js"



let lastRenderTime = 0
const gameBoard = document.getElementById("game-board")
let gameOver = false;


function main(currentTime){
    if(gameOver){
        if(confirm("Wanna Try Again Loser? Press OK")){
            window.location = '/'
        }return
    }
    
    window.requestAnimationFrame(main)
    const secondsSinceLastRenderTime = (currentTime-lastRenderTime)/1000
    if (secondsSinceLastRenderTime < 1/ snakeSpeed) return
    
    lastRenderTime = currentTime

    update()

    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
    

}

function draw(){
    gameBoard.innerHTML=""
    drawSnake(gameBoard)
    drawFood(gameBoard)   
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection ()
}