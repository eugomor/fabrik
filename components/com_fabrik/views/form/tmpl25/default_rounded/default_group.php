<?php
<?php foreach ($this->elements as $element) {
	?>
	<?php if ($this->tipLocation == 'above' && $element->tipAbove != '') {?>
		<li><?php echo $element->tipAbove; ?></li>
	<?php }?>
	<li <?php echo $element->column;?> class="<?php echo $element->containerClass;?>">
	<div class="displayBox">
		<div class="leftCol">
			<?php echo $element->label;?>
			<?php echo $element->errorTag; ?>
		</div>
		<div class="fabrikElement">
			<?php echo $element->element;?>
		</div>

<?php if ($this->tipLocation == 'side') {
	echo $element->tipSide;
}?>
		</div>
	</li>
	<?php if ($this->tipLocation == 'below' && $element->tipBelow != '') {?>
	<li><?php echo $element->tipBelow; ?></li>
	<?php }?>
	<?php }?>
</ul>