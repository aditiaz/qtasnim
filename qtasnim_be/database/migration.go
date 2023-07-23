package database

import (
	"fmt"
	"qtasnim/models"
	"qtasnim/mysql"
)

func RunMigration() {
	err := mysql.DB.AutoMigrate(
		&models.Barang{},
	)
	if err != nil {
		fmt.Print(err)
		panic("Migration Failed")
	}
	fmt.Println("Migratiton Succes")
}
