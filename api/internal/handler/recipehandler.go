package handler

import (
	"api/internal/model"
	"api/internal/pkg"
	"fmt"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func createSlug(title string) string {
	slug := strings.ToLower(title)
	slug = strings.ReplaceAll(slug, " ", "-")
	return slug
}

func (handler *Handler) CreateRecipeHandler(c *gin.Context) {
	var input model.Recipe
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	input.Slug = createSlug(input.Title)

	fmt.Println(input)

	result := pkg.DB.Create(&input)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"success": "Recipe created successfully"})
}

func (handler *Handler) GetRecipesHandler(c *gin.Context) {
	var recipes []model.Recipe
	result := pkg.DB.Find(&recipes)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, recipes)
}
